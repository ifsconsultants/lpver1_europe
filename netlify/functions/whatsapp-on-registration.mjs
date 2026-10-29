/**
 * Verified Netlify Forms submission -> Meta WhatsApp Cloud API.
 * No browser-exposed credentials. Gmail notification is configured in Netlify UI.
 * Requires an APPROVED, enabled utility template in the WhatsApp Business Account.
 */
const FORM_NAME = 'ifs-europe-virtual-fair';
function normalizePhone(value) {
  let digits = String(value || '').replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  // The event targets India; accept a 10-digit Indian phone and add country code.
  if (digits.length === 10) digits = '91' + digits;
  return /^[1-9]\d{9,14}$/.test(digits) ? digits : null;
}

async function sendTemplate({ to, template, parameters = [] }) {
  const token = process.env.WA_ACCESS_TOKEN;
  const sender = process.env.WA_PHONE_NUMBER_ID;
  const version = process.env.WA_GRAPH_VERSION || 'v26.0';
  const language = process.env.WA_TEMPLATE_LANGUAGE || 'en_US';
  if (!token || !sender || !template) return false;
  if (!/^v\d+\.0$/.test(version)) throw Error('Invalid graph version');
  const body = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to,
    type: 'template',
    template: {
      name: template,
      language: { code: language },
      ...(parameters.length ? { components: [{type:'body',parameters: parameters.map(value => ({type:'text',text:String(value).slice(0,120)}))}] } : {})
    }
  };
  const response = await fetch(`https://graph.facebook.com/${version}/${sender}/messages`, {
    method: 'POST',
    headers: {Authorization: `Bearer ${token}`, 'Content-Type':'application/json'},
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12000)
  });
  if (!response.ok) {
    // Never print phone numbers, student details or API tokens.
    console.error(`WhatsApp API returned HTTP ${response.status}. Check template, permissions and configuration.`);
    return false;
  }
  return true;
}

export default {
  async formSubmitted(event) {
    try {
      const data = event?.data || {};
      // Ignore other forms if Netlify includes the form-name field.
      const submittedForm = data['form-name'];
      if (submittedForm && submittedForm !== FORM_NAME) return;
      if (data['bot-field']) return;
      const name = String(data.name || '').trim().slice(0,80);
      const country = String(data.country || '').trim().slice(0,60);
      const number = normalizePhone(data.phone);
      if (!name || !number) return;
      // Student consent is required for business-initiated WhatsApp messages.
      if (data.whatsapp_opt_in === 'yes') {
        const template = process.env.WA_TEMPLATE_NAME || 'ifs_virtual_fair_confirmation';
        // Template BODY text must contain exactly {{1}} for student name.
        await sendTemplate({ to:number, template, parameters:[name] });
      }
      // Optional admin WhatsApp alert. It needs a separate approved template
      // with exactly {{1}} (name), {{2}} (mobile), {{3}} (preferred country).
      const admin = normalizePhone(process.env.WA_ADMIN_PHONE);
      if (admin && process.env.WA_ADMIN_TEMPLATE_NAME) {
        await sendTemplate({ to:admin, template:process.env.WA_ADMIN_TEMPLATE_NAME, parameters:[name,number,country || 'Not specified'] });
      }
    } catch(error) {
      // Form is already stored in Netlify; never block a registration on WA failure.
      console.error('WhatsApp event handler error:',error?.name || 'UnknownError');
    }
  }
};
