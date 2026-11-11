# Monisha Mansukhani — product design portfolio

A lightweight, static portfolio with Home, About, and three case studies. Built with HTML, CSS, and a small amount of JavaScript. No runtime dependencies or installation step.

## Local preview

Requires Node.js 24 or later.

```sh
npm run render
npm run dev
```

Open http://127.0.0.1:4173. The preview server binds only to loopback.

## Design

The approved palette uses resume blue `#1c4587`, pale blue surfaces, and blue-grey text. Shared color tokens live at the start of `dist/styles.css`; project styles use the same accent and wash variables.

## Edit

- `data/site.json`: Home copy, project metadata, contact links, and image descriptions. Home-specific overrides do not change case-study copy.
- `scripts/pages/`: Rokt, Block Party, iHeartMedia, and About compositions.
- `scripts/page-tools.mjs`: shared editorial sections, images, previews, and next-project navigation.
- `scripts/render.mjs`: Home, navigation, footer, and HTML generation.
- `dist/*.css`: shared and page-specific styling.
- `dist/navigation.js` and `dist/details.js`: mobile navigation, image inspection, and opt-in demo loading.
- `dist/assets/`: self-hosted project media, portrait, font/license, and resume.

Run `npm run render` after editing copy or templates. Static CSS, JavaScript, and assets are maintained in `dist/`; the renderer updates its HTML files.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` builds and checks the portfolio, uploads `_site/`, and deploys with GitHub Pages. It runs on pushes to `main` and supports manual runs from Actions. Repository Settings → Pages must use **GitHub Actions** as the publishing source.

The build uses the base path reported by GitHub Pages, so navigation, nested routes, CSS, fonts, images, and the resume work under the project URL. No custom domain or DNS changes are configured.

To check a project-path build locally:

```sh
PAGES_BASE_PATH=/product-design-portfolio npm run build:pages
```

For a root-domain build:

```sh
npm run build:pages
```

The build validates all five routes, local links, assets, and section anchors. It creates a standalone `_site/` artifact while preserving the root-path local preview in `dist/`. GitHub Pages serves the actual nested HTML directories; no SPA redirect is required.

## Project sources and previews

See `ASSET_SOURCES.md` for media provenance. Project claims follow the reviewed content. The portrait is unchanged, and the site resume uses the confirmed public Gmail destination.

Rokt’s external demo uses fictional data and loads only after a visitor requests it. No real Gong, HubSpot, or n8n accounts are connected. The Block Party Figma link currently requires access or an update; actual static screens and its external link remain available. iHeartMedia uses approved shared-project visuals with source credit.

Original project materials, private editorial notes, and local QA captures remain outside the published artifact and are excluded from version control.
