# Bigger photos in the car detail popup

Applies to every car popup (available and sold share the same popup).

## Layout
1. **Top:** full-width main photo, widescreen 16:9, with left/right arrows.
2. **Thumbnail strip** under the photo: click any small photo to jump to it; the current one is highlighted.
3. **Below:** price and mileage, then specs (engine, transmission, fuel, economy) in 2–4 columns, then features in 2–3 columns, description, and the Message Us / Craigslist buttons.
4. Popup gets wider (about 1100px) so photos look larger; stacks nicely on phones.

No photos need re-uploading — only the popup layout changes.

## Technical details
- Edit only `src/components/CarDetailModal.tsx`: `max-w-6xl`, single column, `aspect-video` slides, carousel API (`setApi`) to sync selected thumbnail, scrollable thumbnail row.
- Keep existing SMS links and Craigslist button.

## Cost
You have 3.10 credits today, enough for this single-file change (typically ~0.5–1 credit).
