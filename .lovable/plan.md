# Make Facebook buttons open reliably

## Goal
Ensure every “Schedule a Test Drive,” “Message Us,” and “Message on Facebook” action leaves the embedded preview and opens the Eagles Auto Sales Facebook page in a separate browser tab.

## Implementation
- Replace the tracking-parameter URL with the canonical page URL: `https://www.facebook.com/EaglesAutoSalesLLC/`.
- Keep the actions as native links rather than JavaScript popups, with explicit new-tab and safe external-link attributes.
- Apply the same link behavior in both the contact section and vehicle detail dialog so no Facebook CTA behaves differently.

## Validation
- Test each Facebook CTA from the live preview, including the buttons inside a vehicle dialog.
- Confirm a separate tab opens at the Eagles Auto Sales page and the app preview remains open.
- Confirm the link markup and TypeScript checks remain valid.

## Technical note
Facebook prohibits its pages from being embedded in another site’s iframe. The app cannot override Facebook’s security headers; opening the page in a separate top-level tab is the reliable supported behavior. The current source already uses new-tab links, and a local browser check successfully reached the correct page, so this change removes the temporary tracking URL and standardizes all relevant actions.