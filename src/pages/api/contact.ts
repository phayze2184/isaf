import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getField = (formData: FormData, field: string) => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

const acceptsJson = (request: Request) =>
  request.headers.get("accept")?.includes("application/json") ?? false;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const redirectToStatus = (request: Request, status: "success" | "error") =>
  Response.redirect(new URL(`/?contact=${status}#contact`, request.url), 303);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"] as const;

const getMailConfig = () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    return {
      ok: false as const,
      error: `Lipsesc variabilele de mediu: ${missing.join(", ")}`,
    };
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER as string;

  return {
    ok: true as const,
    transporter: nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user,
        pass: process.env.SMTP_PASS,
      },
    }),
    from: process.env.SMTP_FROM || user,
    to: process.env.CONTACT_TO_EMAIL || "office@isaf.ro",
  };
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const website = getField(formData, "website");

  if (website) {
    return acceptsJson(request) ? json({ ok: true }) : redirectToStatus(request, "success");
  }

  const name = getField(formData, "name");
  const company = getField(formData, "company");
  const email = getField(formData, "email");
  const subject = getField(formData, "subject");
  const message = getField(formData, "message");

  if (!name || !email || !subject || !message) {
    const response = { ok: false, error: "Completați toate câmpurile obligatorii." };
    return acceptsJson(request) ? json(response, 400) : redirectToStatus(request, "error");
  }

  if (!EMAIL_REGEX.test(email)) {
    const response = { ok: false, error: "Introduceți o adresă de email validă." };
    return acceptsJson(request) ? json(response, 400) : redirectToStatus(request, "error");
  }

  const mailConfig = getMailConfig();

  if (!mailConfig.ok) {
    console.error(`[contact] Config SMTP invalid: ${mailConfig.error}`);
    const response = { ok: false, error: "Formularul nu este configurat încă pentru trimitere." };
    return acceptsJson(request) ? json(response, 500) : redirectToStatus(request, "error");
  }

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || "Nespecificată");
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    await mailConfig.transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      replyTo: email,
      subject: `[ISAF Website] ${subject}`,
      text: [
        `Nume: ${name}`,
        `Companie: ${company || "Nespecificată"}`,
        `Email: ${email}`,
        `Subiect: ${subject}`,
        "",
        "Mesaj:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">Mesaj nou de pe site-ul ISAF</h2>
          <p><strong>Nume:</strong> ${safeName}</p>
          <p><strong>Companie:</strong> ${safeCompany}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subiect:</strong> ${safeSubject}</p>
          <p><strong>Mesaj:</strong><br />${safeMessage}</p>
        </div>
      `,
    });

    return acceptsJson(request) ? json({ ok: true }) : redirectToStatus(request, "success");
  } catch (error) {
    console.error("[contact] Email send failed", error);
    const response = { ok: false, error: "Nu am putut trimite mesajul. Încercați din nou." };
    return acceptsJson(request) ? json(response, 500) : redirectToStatus(request, "error");
  }
};
