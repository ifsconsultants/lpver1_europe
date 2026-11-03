# IFS scrolling Google reviews setup

## Ready by default
The Student Success section now scrolls right to left, with six dated review summaries from the public Trustindex mirror of IFS Google feedback. This static fallback is the most recent individually verifiable public feedback available to this build (latest 16 Aug 2025). It does NOT claim to be the latest on Google as of today.

## Optional: pull newer Google reviews automatically
The package includes `netlify/functions/ifs-latest-reviews.js`. It calls **Google Places Details (Legacy)** using `reviews_sort=newest` and can return at most five reviews. Google access and billing may apply, and Legacy may be unavailable for new Google Cloud projects. Places API (New) currently sorts its reviews by relevance, not date.

1. In Google Cloud, enable the appropriate Google Places API and billing for your project.
2. Find the exact Google Place ID for IFS Abroad Education Consultants in Vizag. Do not substitute a different branch.
3. In your Netlify site, go to **Project configuration > Environment variables**.
4. Add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`. Keep the API key secret: do not paste it in HTML or a public repository.
5. Redeploy your GitHub-connected Netlify site.
6. Visit `/.netlify/functions/ifs-latest-reviews` on your live site. With valid access it returns the newest Google reviews available through the API. If not configured, the page still shows the dated fallback reviews.

A Google account's Business Profile API can support more complete review access, but requires additional OAuth authorization and is not included in this package.

## Scrolling behavior
Automatic right-to-left scrolling, pause on hover, Pause/Resume button, and reduced-motion preference are included. There are no autoplay ads or other external review-widget dependencies.

**Sources:** https://www.trustindex.io/reviews/www.ifsconsultants.in and https://developers.google.com/maps/documentation/places/web-service/legacy/details
