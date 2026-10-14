# Polarex

A static landing page for the Polarex design partnership, built with Vite, semantic HTML, vanilla JavaScript, and CSS. Vite is the only project dependency. No backend or environment variables are needed.

## Local development

Use Node.js 24 LTS (`nvm use` if you have nvm installed).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm run check   # JavaScript syntax validation
npm run build   # Production files in dist/
npm run preview # Serve the production build locally
```

## Deploy through GitHub to Vercel

1. Create a GitHub repository and push this project's source, including `package-lock.json`. The `.gitignore` excludes dependencies and generated builds.
2. Import the repository into Vercel. Select the **Vite** framework preset, **Node.js 24.x**, `npm run build` as the build command, and `dist` as the output directory. The included `vercel.json` supplies the build settings.
3. Deploy. Future pushes to the production branch trigger deployments.

The page uses static hosting with no server functions or paid integrations. It is technically compatible with Vercel's static hosting limits, but [Vercel's free Hobby plan is restricted to non-commercial, personal use](https://vercel.com/docs/plans/hobby). A commercial Polarex landing page needs a Vercel plan that permits commercial use, or another static host whose free plan permits it. [Vite deployment documentation](https://vercel.com/docs/frameworks/frontend/vite).

After assigning a production domain, add an absolute canonical URL and `og:url` in `index.html`, and change `og:image` / `twitter:image` to the absolute production URL of `/assets/social-preview.png`. These are omitted or relative until the domain is known, rather than assuming a domain you may not own.

## Editing

- **Copy, page structure, metadata, and form URL:** `index.html`.
- **Layout, colors, typography, and responsive rules:** `src/style.css`.
- **Form loading status and copyright year:** `src/main.js`.
- **Brand assets:** `public/assets/`. The logo crops preserve the supplied branding; the original logo and report screenshots remain in the project root as references.

The report is clearly labeled as an illustrative example, adapted from the supplied screenshots. It does not claim actual customers, buying intent, or outcomes.

## Tally application

The page embeds the existing `MelXaX` form with the requested parameters and [Tally's official embed script](https://tally.so/help/embed-your-form). Tally controls the form fields, submissions, event forwarding, and automatic iframe resizing. The initial iframe height provides a fallback; CSS does not override the height set by Tally.

The iframe has a direct source so it can start loading independently of the embed script, and the page provides an always-visible link to open the application separately. Form updates made in Tally appear in the existing embed. No form submission data is handled or stored by this project.

For release QA, check the page at narrow and wide viewport sizes, follow the application links with a keyboard, and confirm that the live Tally form resizes when fields or pages change. Use test data for a submission only when authorized; deployment itself does not require a test submission.
