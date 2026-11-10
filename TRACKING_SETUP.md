# IFS Europe Virtual Education Fair: OpenAI Ads tracking

Pixel ID: `HWxCCbtGVLNUsPpzb1jvyj`

This package adds your provided OpenAI Ads Measurement Pixel to:
- `public/index.html` (landing page)
- `public/thank-you.html` and `public/thank-you/index.html` (confirmation routes)

The existing country cards, 13 destination options, popup/inline registration form,
Netlify form names, hero carousel, and Trustindex reviews are unchanged.

## Events
- `page_viewed` is requested once when the landing or thank-you page loads.
- `registration_completed` is requested only when a visitor submits the existing
  Netlify registration form and then reaches the thank-you page in the same tab
  within 20 minutes. A one-use sessionStorage marker and event ID help avoid
  duplicate conversions on reload or a direct visit to the thank-you page.
- The conversion event does **not** fire merely when someone clicks Register.

## Complete the setup in OpenAI Ads Manager

Configure a conversion event with type **registration_completed**, linked to
the correct website data source and the campaign you intend to measure.
A pixel installed on the website by itself does not guarantee campaign conversions.

The installed code retains `debug:true` because you supplied it. Once you've verified
events are arriving, change it to `debug:false` on all three HTML files (or omit debug).

## Live validation after GitHub and Netlify deployment

1. Confirm Netlify's publish directory is `public` and deployment has finished.
2. Open the landing page and check the browser developer-console logs (debug enabled).
3. Use DevTools > Network to verify the OpenAI pixel script loads from
   `https://bzrcdn.openai.com/sdk/oaiq.min.js` and requests reach the service.
4. Submit a *test* registration through the website; verify Netlify Forms received it
   and the page redirects to `/thank-you/`.
5. Confirm `registration_completed` appears in OpenAI Ads Manager's recent events;
   distinguish event receipt from campaign-attributed conversions.
6. Check your privacy notice and applicable consent requirements before launch.

If the Netlify form instead submits through a third-party provider or has an external
success page, the completion hook must be adapted to that provider's success callback.

## Not Google Ads

`bzrcdn.openai.com` and `oaiq(...)` track conversions for ChatGPT/OpenAI Ads.
They are not Google Ads tags. Google Ads requires its separate Google tag
(typically an `AW-...` conversion ID) and conversion-event label
(`AW-.../LABEL`) or a Google Tag Manager configuration. Those values have
not been supplied, so no Google Ads tags were invented or installed.
