# IFS Europe Virtual Education Fair — College field update

**Event:** Saturday 28 November 2026, 10 AM – 1 PM IST (Zoom).

## Form change

Added **College Name*** as a full-width required text field under Academic profile, before Major/Branch.

```html
<label class="fair-field fair-wide" for="fair-college">College Name <span>*</span><input id="fair-college" type="text" name="college" maxlength="150" autocomplete="organization" placeholder="Enter your current or last attended college" required></label>
```

- `id`: `fair-college`
- `name`: `college` (automatically included in the existing Netlify form payload)
- Works for both the inline form and the popup since both display the same underlying form element.
- The field is required, has native HTML validation, and is visible at desktop and mobile widths.
- Corrected the date in the floating WhatsApp prefilled enquiry text to **28 November 2026**.

## Deploy

1. Extract ZIP contents into your GitHub repository root, **not** into an extra subfolder.
2. Commit to your deploy branch (usually `main`).
3. Netlify publishes from `public` as configured in `netlify.toml`.
4. Submit a test registration, including College Name, and check Netlify **Forms → ifs-europe-virtual-fair** to confirm the `college` field is received.
5. Confirm form notifications include the new field (Netlify form notification settings may need review if customized).

The ZIP contains the website's supporting image files and Netlify functions. The standalone HTML file is not a replacement for the full site bundle if those assets are not already deployed.
