# IFS Trustindex Reviews | GitHub + Netlify

## Already working
The Student Success section displays six dated, publicly visible Google-sourced review summaries from the IFS Consultants Trustindex profile. The carousel scrolls right to left and pauses on hover. No API key is required.

Trustindex public review profile: https://www.trustindex.io/reviews/www.ifsconsultants.in
Last visibly dated public review at the time this package was prepared: 16 August 2025. The public page may not be current.

## To turn on automatic Trustindex updates
1. Sign in to https://admin.trustindex.io/ (or create/connect your own Trustindex account).
2. Connect **IFS Abroad Education Consultants**' Google Business Profile to your Trustindex account.
3. In **Widget Configurator**, choose a horizontal Slider/Carousel and set its autoplay/rotation direction and frequency (right-to-left where the widget offers this).
4. Click **Save and get code**. Copy the official HTML embed JavaScript URL in the form `https://cdn.trustindex.io/loader.js?YOUR_UNIQUE_WIDGET_ID`. Do not use a WordPress shortcode on Netlify. Depending on your Trustindex plan, external HTML/JS embed availability may require a paid subscription.
5. Open `public/index.html` in GitHub. Find:

   `const TRUSTINDEX_WIDGET_URL = '';`

   Replace it with:

   `const TRUSTINDEX_WIDGET_URL = 'https://cdn.trustindex.io/loader.js?YOUR_UNIQUE_WIDGET_ID';`

6. Commit to `main`. Netlify redeploys automatically. The widget loads from Trustindex's CDN. The previous dated reviews remain as a fallback if loading fails.
7. If you also use `public/reviews-section-embed.html` independently, make the same edit there.

You do NOT need a Google Places API key or review-fetching Netlify function. The official Trustindex widget decides its review selection, display and refresh interval.

## Important
The current package cannot auto-display November 2026 Google reviews without your unique Trustindex widget ID. The public Trustindex page exposed only reviews dated through August 2025. Avoid calling the dated fallback “latest 2026 reviews”.
