# Polarex

A static landing page for the Polarex design partnership, built with Vite, semantic HTML, vanilla JavaScript, and CSS. Vite is the only project dependency. No backend or environment variables are needed.

## Local development

Use Node.js 24 LTS (`nvm use` if you have nvm installed).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173/).

```sh
npm run check   # JavaScript syntax validation
npm run build   # Production files in dist/
npm run preview # Serve the production build locally
```

## Deploy to GitHub Pages

1. In [the repository's Pages settings](https://github.com/danielcmc/PolarexLandingPage/settings/pages), under **Build and deployment → Source**, select **GitHub Actions**. Keep **Custom domain** set to `getpolarex.com`. For GitHub Free, the repository must be public; private-repository Pages requires an eligible GitHub plan.
2. Commit and push these changes to `main`, including `.github/workflows/deploy.yml`, `vite.config.js`, and `package-lock.json`. The workflow installs dependencies, checks JavaScript, builds the site, and deploys only `dist/`.
3. Follow **Actions → Deploy to GitHub Pages**. After the workflow succeeds, the site will be available at **https://getpolarex.com/**. Future pushes to `main` redeploy automatically. You can also select **Run workflow** in the Actions tab.

The workflow uses GitHub's built-in deployment token; no custom secrets, `gh-pages` branch, or committed build files are required. See [GitHub's Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [Vite's GitHub Pages guide](https://vite.dev/guide/static-deploy.html#github-pages).

`vite.config.js` sets `base: '/'` because the custom domain serves the site at its root. Styles, JavaScript, and images load from `/assets/`. After building, preview at http://localhost:4173/.

The canonical and social-sharing URLs in `index.html` point to `getpolarex.com`. If you change the custom domain, update those URLs and the Pages setting. Custom GitHub Actions deployments do not require a `CNAME` file; GitHub stores the custom domain in the repository's Pages settings. See [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

If you switch back to the default repository URL, set `base` to `/PolarexLandingPage/` and update the canonical and social-sharing URLs. Keeping that repository prefix on a custom domain makes asset requests fail and leaves the page unstyled.

## Editing

- **Copy, page structure, metadata, and form URL:** `index.html`.
- **Layout, colors, typography, and responsive rules:** `src/style.css`.
- **Form loading status and copyright year:** `src/main.js`.
- **Brand assets:** `public/assets/`. The logo crops preserve the supplied branding; the original logo and report screenshots remain in the project root as references.
- **Favicons:** `public/assets/favicon.png` (192×192) and `public/favicon.ico` (16, 32, 48, and 64px). Both use the supplied Polarex symbol.
- **Hosting path and deployment:** `vite.config.js` and `.github/workflows/deploy.yml`.

The report is clearly labeled as an illustrative example, adapted from the supplied screenshots. It does not claim actual customers, buying intent, or outcomes.

## Google search icon

The homepage declares both favicon formats. Keep their URLs stable and publicly accessible. After deployment, you can request indexing of `https://getpolarex.com/` using Google Search Console's URL Inspection tool. Google may take several days to several weeks to recrawl and process the favicon; its appearance is not guaranteed. See [Google's favicon documentation](https://developers.google.com/search/docs/appearance/favicon-in-search).

## Tally application

The page embeds the existing `MelXaX` form with the requested parameters and [Tally's official embed script](https://tally.so/help/embed-your-form). Tally controls the form fields, submissions, event forwarding, and automatic iframe resizing. The initial iframe height provides a fallback; CSS does not override the height set by Tally.

The iframe has a direct source so it can start loading independently of the embed script, and the page provides an always-visible link to open the application separately. Form updates made in Tally appear in the existing embed. No form submission data is handled or stored by this project.

For release QA, check the page at narrow and wide viewport sizes, follow the application links with a keyboard, and confirm that the live Tally form resizes when fields or pages change. Use test data for a submission only when authorized; deployment itself does not require a test submission.
