# Live Google reviews via Trustindex: installation

Provided script has been inserted directly in the Student Success section on both `public/index.html` and `public/reviews-section-embed.html`:

```html
<script defer async src='https://cdn.trustindex.io/loader.js?6a24f1b85df741992166b33191b'></script>
```

**How it works**

- The actual Trustindex widget is shown once the vendor renders it.
- Until it renders, the original right-to-left scrolling *dated* reviews remain as fallback.
- If the widget loads, the fallback is hidden to avoid repeating older reviews or presenting a stale static rating next to a changing rating.
- The page does not scrape Google. Trustindex controls the reviews, refresh cadence, count, and order.

**Configure scrolling and review count in Trustindex**

Open your Trustindex dashboard -> Widget Configurator -> locate widget ID `6a24f1b85df741992166b33191b` and choose a **Slider/Carousel** layout with **autoplay** and newest-first ordering (where supported). For a right-to-left movement, configure navigation/direction in the widget if your plan offers it. The third-party widget's internal animation cannot be reliably overwritten with page CSS. Increase how many reviews it displays through the widget settings if you want more than the default selection.

**Verify after Netlify deployment**

1. Publish the project with Netlify publish directory `public`.
2. Open the live website in an incognito tab, scroll to Student Success, and check for the Trustindex widget.
3. In the browser Network tab, confirm `https://cdn.trustindex.io/loader.js?6a24f1b85df741992166b33191b` loads successfully and is not blocked by browser extensions.
4. If you still see old fallback reviews, check the browser console and the widget connection/status in Trustindex.
5. Newly submitted Google reviews appear after Trustindex sync, not instantaneously.

This update preserves the date **21 November 2026, 10 AM–1 PM IST**, the 13 non-UK countries, the Netlify registration form, WhatsApp group confirmation step, floating support panel, and OpenAI pixel.
