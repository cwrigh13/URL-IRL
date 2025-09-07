# Contact Information Update Guide

## Files to Update

You need to replace the placeholder information in these files with your real business details:

### 1. Footer Component
**File:** `src/components/layout/Footer.tsx`

**Replace these placeholders:**
- `+61 XXX XXX XXX` → Your actual phone number
- `https://linkedin.com/in/YOUR-LINKEDIN-USERNAME` → Your LinkedIn profile URL

### 2. Structured Data Component  
**File:** `src/components/ui/StructuredData.tsx`

**Replace these placeholders:**
- `+61-XXX-XXX-XXX` → Your actual phone number (same as footer)
- `XX XXX XXX XXX` → Your actual ABN (Australian Business Number)
- `YOUR STREET ADDRESS` → Your business address
- `YOUR CITY` → Your city
- `YOUR STATE` → Your state (NSW, VIC, QLD, etc.)
- `XXXX` → Your postal code
- `YOUR_LATITUDE` → Your business latitude (optional, for Google Maps)
- `YOUR_LONGITUDE` → Your business longitude (optional, for Google Maps)

## Example

If your business details are:
- Phone: +61 412 345 678
- ABN: 12 345 678 901
- Address: 123 Main Street, Melbourne VIC 3000
- LinkedIn: linkedin.com/in/johnsmith

Then update the files accordingly.

## Important Notes

- Keep the email `hello@urlirl.com.au` as is (it's already correct)
- The phone number should be in Australian format: +61 XXX XXX XXX
- ABN should be in format: XX XXX XXX XXX (with spaces)
- Make sure both Footer.tsx and StructuredData.tsx have the same phone number
- LinkedIn URL should be the full URL: https://linkedin.com/in/yourusername

## After Updating

Once you've updated these files with your real information:
1. Test the website to ensure all contact links work
2. Verify the phone number is clickable on mobile devices
3. Check that LinkedIn link opens correctly
4. Test the contact form to ensure emails are received

## Security Note

These files contain your business information that will be public on your website. Make sure you're comfortable with this information being visible to visitors.
