# Multi-country selection: IFS Europe Virtual Education Fair

The registration form now supports selecting multiple countries. A checkbox dropdown
includes all 13 destinations plus **Not sure yet**. The latter is mutually exclusive.

**How it works**
- Both inline registration and country-card popup share the same single Netlify form.
- Clicking Explore on a country card adds that country to the selection without
  clearing already selected destinations.
- Form field name remains `country` for existing Netlify Forms/email notification
  integrations; selected names are stored as a comma-separated string, e.g.
  `Germany, Ireland, Netherlands`.
- At least one choice is required, enforced on the client. Keyboard operation
  and error messaging are supported.
- The user may choose `Not sure yet` instead of a destination.
- Other website sections, WhatsApp group link, tracking, event date/time,
  country cards and live Trustindex widget are unchanged.

**Netlify deployment:** Upload the ZIP contents to the GitHub repository root,
then let Netlify deploy the `public` publish directory. After deployment,
register once with two countries selected and verify both names appear in
Netlify Forms and your notification email.
