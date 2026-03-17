# ISAF Presentation Website

Corporate presentation website for ISAF, built with Astro and Tailwind CSS. The site presents the company's railway electrification expertise, product portfolio, project highlights, legal pages, and a contact form backed by an SMTP-powered server endpoint.

## Overview

- Framework: Astro 6
- Styling: Tailwind CSS 4
- Runtime: Node.js standalone adapter
- UI language: Romanian
- Contact delivery: Nodemailer via SMTP

The homepage is structured as a single presentation flow with these main sections:

- Hero
- About
- Products
- Why ISAF
- Projects
- Contact

Additional public pages:

- `/` - main presentation page
- `/politica` - privacy policy
- `/politica-cookie` - cookie policy
- `/termeni-si-conditii` - terms and conditions
- `/api/contact` - contact form endpoint

## Requirements

- Node.js `>=22.12.0`
- npm

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

The app runs locally at `http://localhost:4321`.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Build the production app |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run Astro type checks |


## Project Structure

```text
/
|-- public/                 # Static assets such as logo and favicons
|-- src/
|   |-- assets/             # Image assets used across the site
|   |-- components/         # Presentation sections and shared UI
|   |-- layouts/            # Shared document layout
|   |-- pages/              # Astro pages and API routes
|   |   |-- api/contact.ts  # Contact form handler
|   |   |-- index.astro     # Main landing page
|   |   |-- politica.astro
|   |   |-- politica-cookie.astro
|   |   `-- termeni-si-conditii.astro
|   `-- styles/             # Global styling
|-- astro.config.mjs        # Astro config with Node adapter
`-- package.json
```

## Build and Deployment

This project uses the Astro Node adapter in `standalone` mode:

```js
output: "server"
```

Build for production with:

```sh
npm run build
```

Make sure the deployment environment provides the SMTP variables if the contact form should be operational.

## Content Notes

- The website content and metadata are tailored for ISAF's railway electrification and signaling business.
- Main SEO metadata is defined in the shared layout and customized on the homepage.
- Legal pages and cookie consent are included in the app.
