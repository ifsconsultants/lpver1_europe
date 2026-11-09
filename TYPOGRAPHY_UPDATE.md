# IFS Europe Virtual Education Fair: typography update

The fonts below have been added to the main landing page and all standalone page/section embeds:

- **Plus Jakarta Sans (600–800):** page headings, titles, cards, strong CTA text.
- **Manrope (400–800):** paragraphs, navigation, inputs, registration form and utility labels.
- **Newsreader:** italic editorial highlights in the main hero headline and reviews title.
- **Material Symbols Outlined:** optional icon font, used in the solution section labels.

The exact supplied Google Fonts stylesheet URLs are included as `<link>` tags. No font files are bundled; the browser fetches them from Google Fonts.

## Deploy with GitHub and Netlify

Upload **the contents** of this package to the root of the linked GitHub repository, preserving `public/`, `netlify/`, and `netlify.toml`. Netlify's publish directory must be `public`.

The complete existing site is retained: 13 countries (UK removed), 16 rotating student admission cards with fixed Normal speed, country-selected registration popup, expanded academic fields, Netlify Forms, thank-you page, and Trustindex review fallback.

The fonts will display when the device can reach Google Fonts, otherwise the site will use local sans-serif and serif fallbacks.
