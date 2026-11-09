# Registration form now visible on the page

The `07 / Reserve your spot` section shows the complete Netlify form on the right, with contact and academic fields, on desktop. On mobile it stacks below the event details.

**Important:** Exactly ONE Netlify form is included in the HTML. Country Explore and other Register buttons can still open the popup. JavaScript temporarily moves this existing form into the popup and returns it to the inline section when the popup closes. This ensures consistent fields and Netlify detection without duplicate IDs.

To deploy through GitHub: upload all the extracted contents to the repository root, commit to `main`, and keep Netlify's Publish directory `public`. Verify the `ifs-europe-virtual-fair` form appears in Netlify Forms. Test one registration and the `/thank-you/` route before launching ads. Gmail alerts and WhatsApp Cloud API require their previous account configurations.
