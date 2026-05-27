# Google Form 字段配置

## 标题
**mizhi-bot Free Trial Signup**

## 描述
Start your 14-day free trial. We'll personally set up your AI receptionist and have it running within 24 hours.

## 字段（按顺序）

1. **Business Name** (Short answer, required)
2. **Contact Email** (Short answer, required, email validation)
3. **WhatsApp Number** (Short answer, required) — include country code
4. **Industry** (Dropdown, required)
   - Beauty / Aesthetics Clinic
   - Dental Clinic
   - Barbershop / Hair Salon
   - Physiotherapy / Chiropractor
   - Gym / Fitness Studio
   - Tattoo Studio
   - Nail Salon
   - Other
5. **Plan** (Multiple choice, required)
   - Starter ($49/mo)
   - Professional ($99/mo)
   - Enterprise ($199/mo)
   - Not sure — help me choose
6. **How did you hear about us?** (Short answer, optional)
7. **Anything else we should know?** (Paragraph, optional)

## Settings
- Collect email addresses: YES
- Limit to 1 response: NO (same email might sign up multiple businesses)
- Confirmation message: "Thanks! Arthur will reach out within 24 hours to set up your bot. Expect a WhatsApp message from us soon."

## After Creating
1. Get form URL (Send → link icon)
2. Replace all instances of `https://forms.gle/your-form-id` in `marketing/landing-page.html`
