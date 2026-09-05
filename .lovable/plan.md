Replace Facebook links with SMS phone number CTAs

## Goal
Remove the broken Facebook page links and make every CTA use the dealership's text/SMS phone number so visitors can actually reach the lot.

## Changes

### 1. `src/components/CarDetailModal.tsx`
- Remove the `facebookUrl` constant.
- Convert the "Schedule a Test Drive" button from a Facebook anchor to an SMS link (`sms:+19194144677`).
- Convert the "Message Us" button from a Facebook anchor to an SMS link (`sms:+19194144677`).
- Keep the existing "Message Now" SMS button behavior, or consolidate if it duplicates the new link.
- Update button labels so they reflect SMS/text contact (e.g., "Message Us" / "Text to Schedule").

### 2. `src/components/Contact.tsx`
- Remove the `facebookUrl` constant.
- Replace the "Facebook Messenger" contact-info line with a text/SMS line pointing to `(919) 414-4677`.
- Convert the "Message on Facebook" button to an SMS link (`sms:+19194144677`) labeled "Message Us".
- Keep the existing "Message (919) 414-4677" button.

## Technical details
- Use the `sms:` URI scheme with the E.164 number `+19194144677`.
- Prefer anchor tags with `href="sms:+19194144677"` so the link is clickable on both desktop and mobile.
- Remove unused `ExternalLink`/`Calendar` icons if they are no longer referenced after the swap.
- Run `bun run build` to verify no broken imports or references remain.
