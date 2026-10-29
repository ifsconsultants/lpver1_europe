# IFS Consultants – Europe Virtual Fair 2026: Netlify Lead Form + WhatsApp

Event: 10 November 2026, 10:00 AM to 5:00 PM IST.

## What is already coded
- Responsive landing page with all 8 admission-card images EMBEDDED in the HTML (no image folder needed).
- Real Netlify Forms registration form with validation, consent, honeypot, and UTM tracking.
- Registration redirects to `/thank-you/` (served from `public/thank-you/index.html`).
- Netlify stores verified registrations in Site > Forms; Gmail notifications can be turned on in the Netlify UI.
- A server-side Netlify form event function that sends automated WhatsApp messages using Meta WhatsApp Cloud API, if enabled.

## OPTION A: easiest Netlify Drop (website + submissions + Gmail)
1. For a static-only manual upload, deploy the contents of the `public/` folder.
2. Sign in at https://app.netlify.com/drop and upload the extracted folder containing index.html.
3. In Netlify, open the site > Forms > Enable form detection. If not already enabled, redeploy after enabling.
4. Go to Forms > Submission notifications > Add notification > Email notification. Enter your Gmail address and select form `ifs-europe-virtual-fair`.
5. Submit one live test registration; verify Netlify Forms and your Gmail (also check spam).
IMPORTANT: This is a STATIC deploy. It does not activate automatic WhatsApp messages.

## OPTION B: complete automatic WhatsApp (deploy THIS FULL project via GitHub)
1. Create a new GitHub repository (separate from an existing website).
2. Upload this project's `public/`, `netlify/`, and `netlify.toml` keeping the same structure.
3. In Netlify, import the GitHub repository. Publish directory is `public`; no build command needed. Netlify should detect `netlify/functions` automatically.
4. Enable Netlify Forms detection and configure Email notifications to your Gmail (see above). If you enable it after first deploy, redeploy.
5. Create a WhatsApp Business Platform Cloud API account and configure a production sender number and token.
6. In WhatsApp Manager, create/approve a **UTILITY** template named `ifs_virtual_fair_confirmation` (language `en_US`). Recommended exact body (one variable):

   Hi {{1}}, we received your registration for the IFS Europe Study Abroad Virtual Fair on 10 November 2026, 10:00 AM–5:00 PM IST. Joining details will be shared before the event. — IFS Consultants

7. In Netlify > Site configuration > Environment variables, set:
   - `WA_ACCESS_TOKEN` = your permanent WhatsApp Cloud API token (secret)
   - `WA_PHONE_NUMBER_ID` = the sender Phone Number ID from Meta
   - `WA_TEMPLATE_NAME` = `ifs_virtual_fair_confirmation` (or your approved template name)
   - `WA_TEMPLATE_LANGUAGE` = `en_US`
   - `WA_GRAPH_VERSION` = `v26.0` (or a supported current API version)
8. Redeploy after setting env vars. Register with a test number that has opted in to WhatsApp and confirm the Meta message is delivered.
9. Optional admin WhatsApp alert: Create a separate approved utility template `ifs_new_registration_admin` with 3 placeholders for student name, phone and country. Set `WA_ADMIN_PHONE=917036319256` (only if that number actually receives WhatsApp) and `WA_ADMIN_TEMPLATE_NAME=ifs_new_registration_admin`.

## Notes / security
- NEVER paste Meta tokens, Gmail passwords, or secrets into HTML or a GitHub repository. Use Netlify environment variables.
- Gmail delivery is through Netlify Forms notification settings, not sending as your Gmail account.
- The site will accept registrations after Netlify Forms is enabled, even if Meta WhatsApp is unconfigured.
- Student WhatsApp messages require their explicit optional checkbox, a valid recipient number, an approved Meta template, proper permissions, and a functional sender account. Messaging can incur Meta charges.
- Form submission redirects to the thank-you page once accepted by Netlify. It does NOT guarantee WhatsApp delivery.
- The site uses the native Netlify form, **not Tally**, so do not use a Tally form link for this version.
- Testing a local HTML file does not submit to Netlify Forms; test on the deployed site only.
- On Git deployment, keep the `netlify/functions` directory OUTSIDE the `public` publish directory.

### Troubleshooting
- No form in Netlify Forms? Enable detection and redeploy; check `index.html` contains `data-netlify="true"` and `form-name`.
- No Gmail? Configure submission notification to the correct Gmail and check spam.
- No WhatsApp? Verify sender phone ID, permanent access token, approved template, opt-in, and Netlify function logs. Check Meta API permissions.
- If you deploy via basic Netlify Drop without a build, the WhatsApp function will not deploy. Use the connected GitHub project deployment for the function.

## 404 fix
On your GitHub-connected Netlify project, the publish directory must be `public` (not `.` or `REPOSITORY_FILES/public`). Do not add another parent folder in the repository. Check the published deploy file explorer for `index.html` at its root.

## IMPORTANT: 404 on /thank-you.html after form submission (fixed in this release)
This version fixes a broken form success URL and includes a real directory-index success page.
- Registration form submits to `/thank-you/`.
- The confirmation page is at `public/thank-you/index.html`.
- A legacy link to `/thank-you.html` redirects to `/thank-you/` via `_redirects`.
- Keep your Netlify **publish directory** set to `public`; leave the build command blank.
- Upload the **contents** of this project to the *root* of your GitHub repository, preserving directories.
- Commit and wait until the newest production deploy shows **Published** in Netlify.
- Open `https://YOUR-SITE.netlify.app/thank-you/` directly before submitting a test registration; it should show the confirmation page.
- In Netlify > Deploys > latest production deploy > file explorer, verify `thank-you/index.html` appears alongside `index.html`.
- In Netlify > Forms, ensure form detection is enabled. If it was just turned on, deploy again.
- Send a real test registration, then verify it appears in **Forms > ifs-europe-virtual-fair > Verified**. A success page opening alone is not proof of saved submission.
- Gmail emails require enabling a Form submission email notification in Netlify.
- WhatsApp requires environment variables, Meta-approved template, opt-in and appropriate Netlify function deployment.
