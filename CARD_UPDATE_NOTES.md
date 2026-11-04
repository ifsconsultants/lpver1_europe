# Latest hero carousel update

The rotating hero now includes the three newly uploaded Sweden, Italy, and Denmark student admit posters. All three UK student admit posters have been removed from the **hero carousel only**. The United Kingdom remains a valid destination in the 14-country information section and registration dropdown.

## New student cards
- Ramesh Babu P — Sweden — Chalmers University of Technology
- Gnapika Meka — Italy — Raffles Milano
- Prasanna Shastri — Denmark — Aalborg University

## Preserved
- 13 existing non-UK student cards, 16 cards in the hero total
- Normal fixed rotation (3.8 seconds), pause and previous/next controls
- Existing registration form, thank-you page and Netlify Functions
- 14-country destination cards, challenges and bonuses
- Trustindex reviews and optional widget integration

## No missing image paths
Hero admission posters are embedded as data URIs in both `public/index.html` and `public/hero-section-embed.html`. There is no separate image folder required for the hero.

## GitHub / Netlify upload
Extract this ZIP and upload the contents to the **root** of your GitHub repository, preserving `public/`, `netlify/` and `netlify.toml`. Keep Netlify's publish directory set to `public`. Your connected site should redeploy when changes are committed to the production branch.

## Publishing note
Check student publication permission and the accuracy of university/scholarship information. This ZIP has not been deployed to your live Netlify site.
