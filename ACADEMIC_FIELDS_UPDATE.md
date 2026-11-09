# Registration form: academic profile update

This update retains one Netlify form inside the existing popup. The Explore buttons and Register buttons open it, with the preferred country preselected.

## Newly added or confirmed fields

| Visible label | Netlify submission field | Required |
|---|---|---|
| Major/Branch | `major_branch` | No |
| Current Degree | `current_degree` | Yes |
| GPA/Percentage | `gpa_percentage` | No |
| Backlogs | `backlogs` | No |
| City | `city` | No (previously present; preserved) |
| Year of Passing | `year_of_passing` | No |
| Which Degree do you want to pursue? | `degree_to_pursue` | Yes |

The existing name, phone, email, country, qualification, intake and contact/WhatsApp consent fields remain.

## Netlify deployment

1. Extract the ZIP. Upload its **contents** to the root of the GitHub repository connected to the Netlify project.
2. Keep `netlify.toml` at the repository root and Netlify publish directory `public`.
3. Commit to `main` (or your configured production branch).
4. Ensure Netlify **Forms** detection is on. Redeploy if you just enabled it.
5. Submit a **test registration** via an Explore country button and confirm `/thank-you/` is shown.
6. In **Netlify > Forms**, open the `ifs-europe-virtual-fair` submission and confirm all seven fields appear. Configure Gmail submission notifications in Netlify; these include submitted form fields.
7. WhatsApp Cloud API still requires an approved template, credentials and student consent; the integration remains as before.

Only the form UI and fields were changed. The live site is not updated until the GitHub deployment completes.

## Form options update (9 November 2026)
- Year of Passing is a dropdown: 2025, 2026, 2027, Others.
- Selecting Others opens a required custom year field.
- Removed Intermediate / 12th from Current qualification.
- Both changes apply to the registration popup launched from Explore and Register buttons.
- `year_of_passing` and `year_of_passing_other` are available in Netlify Forms submissions.
