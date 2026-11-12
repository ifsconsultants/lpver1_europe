# Review carousel: slower scrolling and pause on hover

The Google Reviews-style Trustindex-backed review carousel on the home page now:

- Scrolls **right to left** at a slower pace: **135 seconds per full seamless loop**, previously 60 seconds.
- Pauses immediately on **mouse hover** over the review strip, preserving the position.
- Resumes from the same position when the pointer leaves, unless the user manually paused it.
- Pauses when a review gains keyboard focus; the Pause/Resume button remains available for touch devices.
- Respects the visitor's reduced-motion preference.

Updated files:
- `public/index.html`
- `public/reviews-section-embed.html`

The original uploaded student-admit posters, Trustindex connection, multi-country form, Netlify setup, WhatsApp group link, and floating support tabs remain unchanged.

Deploy the full ZIP in GitHub and let Netlify publish it. No changes to Netlify environment variables are needed.
