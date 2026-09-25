# Linus-Fin

Personal developer site for [linusfin.de](https://linusfin.de/), featuring BrightShelf and Metevia.

A compact, dark profile inspired by the minimal layout of [t3.gg](https://t3.gg/), with small app icons and direct project links. The public identity is Linus-Fin; FinCreeper1 is only used in GitHub URLs.

Static HTML and CSS with a small script for closing the navigation on Escape or an outside click. The menu also works without JavaScript. No dependencies or build step required. Serve the repository root with any static web server.

The homepage and 404 page share `styles.css`. App icons are stored in `assets/`. The layout adapts to narrow screens, supports keyboard navigation, and respects reduced-motion preferences. Geist Mono is loaded through Google Fonts with a local monospace fallback.

App detail pages live under `/apps/`; the homepage is the app overview. `/apps/` redirects to `/` for compatibility. Each app has privacy information, and Metevia support lives at `/apps/metevia/support/`. The older GitHub Pages URLs remain as redirects maintained in the `metevia` and `metevia-datenschutz` repositories. App names and icons use CSS cross-document View Transitions where supported.

The hamburger navigation on both pages lists subdomains. Profilfahrt links to `https://profilfahrt.linusfin.de/` and is marked as password-protected; authentication is handled by the destination site.

App previews appear on mouse hover or keyboard focus and can be dismissed with Escape. Touch devices keep direct app-link navigation. Each preview contains a short description and app imagery. BrightShelf uses its existing icon; Metevia uses two public App Store images saved locally in `assets/metevia-preview-*.webp` from https://apps.apple.com/de/app/metevia/id6787199127 (September 2026).
