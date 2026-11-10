# WhatsApp group join after registration

The landing page now tells visitors they will receive the Zoom link in the group.

After a successful form submission, Netlify redirects to `/thank-you/`. The confirmation page now features a prominent green **Join WhatsApp Group** link to:

https://chat.whatsapp.com/EmHqNRqQ6ZpDY8LD7UrVyd

This has been applied to both `public/thank-you.html` and `public/thank-you/index.html` to support both URL paths.

## How it works

1. Visitor submits the existing Netlify form.
2. The confirmation page displays the WhatsApp join button.
3. The visitor clicks it and confirms joining inside WhatsApp.
4. IFS posts the Zoom meeting details to the group before the fair.

**Important:** Joining cannot be automated by the website, and the visitor must opt in to join the WhatsApp group. Group members may see one another's phone numbers.

The existing OpenAI conversion pixel, Netlify form, 13 country cards, hero admits, popup and reviews are preserved.

## Before launch

- Confirm your group invite link is still active and allows new participants.
- Keep the group moderated and publish the Zoom link there ahead of the event.
- Submit a test Netlify registration, follow its `/thank-you/` redirect, and click the join button.
- Check that your page and event poster use the same hours. The website and latest poster now both say **10 AM – 1 PM IST**. The website event time is updated to match the latest poster.

