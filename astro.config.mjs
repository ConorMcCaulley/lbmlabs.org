import { defineConfig } from "astro/config";

// During the preview phase the site deploys to GitHub Pages at
// conormccaulley.github.io/lbmlabs.org/ — a project page, which needs
// the base path. At domain cutover (Cloudflare/custom domain) the
// GITHUB_PAGES env goes away and the site builds for the root.
const onPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  site: onPages
    ? "https://conormccaulley.github.io"
    : "https://lbmlabs.org",
  base: onPages ? "/lbmlabs.org" : "/",
});
