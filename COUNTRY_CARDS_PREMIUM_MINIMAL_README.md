# Premium + minimal country cards

The 13-country section has been updated with:
- Larger landmark photographs and dark image gradients for white-text contrast
- Clean navy/white cards and a restrained IFS gold accent
- Country names and landmarks over photos, without crowded icon pills
- Compact descriptions and consistent Explore links
- Responsive 4/3/2/1-column layouts for large screens, tablets and phones

All 13 image files are in `public/assets/countries/`. The UK remains excluded.
The existing popup country preselection remains wired to `.destination-13[data-country]` and the Explore links.
The registration form, thank-you pages, WhatsApp links, tracking pixel, and floating support widget are unchanged.

Deployment: upload all files from the ZIP to the GitHub repository root and let Netlify deploy,
with publish directory set to `public`.
