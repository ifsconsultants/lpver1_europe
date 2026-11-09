# IFS Europe Virtual Education Fair: Popup Registration Form

## What changed
- Each of the 13 country cards' **Explore** links opens the registration popup, with that country selected automatically.
- All existing **Register**, **Join Free**, **Get Free Access** and related buttons now open the same popup.
- The registration section includes its own Register for Free button.
- Click outside the dialog, use ×, or press Escape to close. Keyboard focus stays in the popup until closed.
- The original form is preserved as a **single HTML Netlify Form** (`ifs-europe-virtual-fair`), now inside the popup. It POSTs normally to `/thank-you/`.
- No additional API keys are needed for Netlify Forms. Gmail submission notifications and WhatsApp Cloud API must still be configured separately in Netlify/Meta.

## Deploy
1. Extract ZIP.
2. Upload its **contents** to the GitHub repo connected to Netlify (not a wrapping folder).
3. Publish directory: `public`. Functions directory: `netlify/functions`.
4. Commit to your production branch; Netlify should redeploy.
5. Check homepage and `/thank-you/`. Under Netlify Forms, ensure form detection is enabled, then submit a test registration and verify it appears.
6. Configure email notifications in Netlify. WhatsApp requires valid approved template and credentials.

## Tests
- Open Explore Germany and confirm country preselection.
- Open any other Explore button, confirm different preselection.
- Open main Register buttons, confirm popup.
- Submit a test registration and inspect Netlify Forms and thank-you page.
