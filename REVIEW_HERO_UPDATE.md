# IFS Europe Virtual Fair: Reviews + Admissions Hero Update

## Admission hero
Five supplied 1462x2048 posters replace the corresponding existing carousel images, without duplicating student entries:
- Austria: P. Yamika
- Denmark: Prasanna Shastri (the supplied source filename was Austria(1).png, but the poster itself says Denmark)
- Ireland: Adari Poshana
- Netherlands: Ch Divya Teja
- Switzerland: Dinesh Kongara

The images are preserved without cropping, recoloring or retouching, and encoded as optimized local .webp files in `public/assets/admits/`. The live site HTML references those assets, so publish the entire ZIP, not only the standalone HTML file.

## Trustindex reviews
- Restored the older IFS white/navy Google review-card design.
- Right-to-left, seamless marquee (60-second loop) with pause/resume button and reduced-motion support.
- All initial six dated review highlights come from the previously used public Trustindex profile snapshot (last listed reviews in 2025). These are NOT live reviews.
- Official Trustindex embed code retained: `https://cdn.trustindex.io/loader.js?6a24f1b85df741992166b33191b`.
- Client-side enhancement attempts to update scrolling cards when the live Trustindex loader renders review text into accessible page DOM. If Trustindex changes markup or renders reviews inside a cross-origin iframe, the scrolling cards remain dated and are not misrepresented as live.
- To view the official synced widget regardless, open “View latest live reviews from Trustindex” below the moving cards. Sync timing, review order and number depend on Trustindex dashboard settings.
- Removed unused Google API reviews functions and client scripts from this package; Trustindex provides the live review data now.

## Still preserved
13 European countries, multi-country registration, official logo in popup, event on 21 Nov 2026 10 AM–1 PM IST, Netlify Forms, WhatsApp group confirmation, OpenAI Ads pixel, right-side support tabs.

## Deploy
Upload the contents of the ZIP to your GitHub repository root; Netlify publish directory is `public`.
