# Vyom Kushvaha — portfolio hero

A responsive React + Vite portfolio with the supplied hero wordmark and an editorial Selected Works showcase. Includes SVG ornamentation, restrained motion, and responsive mobile layouts.

The central wordmark in `src/assets/vyom-kushvaha.svg` uses the supplied SVG outlines, cropped and converted to transparent off-white lettering. Its original flourishes and letter proportions are preserved, with no font dependency.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` creates the production bundle in `dist`.

Update the `links` object in `src/main.jsx` with real profile, email, and resume destinations. The section anchors are reserved for future sections; those sections are intentionally not included. Fonts currently load from Google Fonts.

## Projects

Edit `src/projects/projects.js` to add projects, change content, or replace temporary URLs. `featured: true` includes an entry in the showcase; all entries appear in the archive dialog. Missing roles and stacks are intentionally marked as coming soon. R.A.K.S.H.A.K. content follows the supplied reference. All preview interfaces are illustrative, not actual screenshots.

Desktop screens at least 1100px wide and 740px tall use a sticky scroll showcase, with one selection per wheel gesture and a momentum guard. Native keyboard, touch, and scrollbar scrolling remain available. Clicking a project selects its scroll position. Smaller screens and reduced-motion users get tap-to-switch navigation without pinning. Arrow keys, Home and End navigate the project tabs; Escape closes the archive.
