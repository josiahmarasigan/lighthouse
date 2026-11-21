# SIMC Radiology Portal (GitHub Pages)

The portal's screens live here. Logins, patient lists and results come from the Google Apps Script web app
(the `/exec` link written near the top of `index.html` as `window.PORTAL_API`) through its `doPost` function.
Nothing from Google is shown inside a frame, so phones signed in to several Google accounts work.

## Files
* `index.html` – the portal (same file as Apps Script `Index.html`).
* `pacs.html` – the X-ray PACS (upload + reading). Opened from the portal's "🩻 X-ray PACS" button; same login and server.

## Updating
1. Paste the new **Index.html** from Apps Script over `index.html` here (same content).
2. Upload a new `pacs.html` too when it changes.
3. In `sw.js`, change `VERSION` (e.g. `simc-portal-v3`) so installed apps pick it up quickly.
4. Commit. GitHub Pages republishes in about a minute.

## Apps Script side
* Deploy → Manage deployments → edit the existing deployment → **Who has access: Anyone** → Version: New version → Deploy.
  (Keep the same deployment so the `/exec` link stays the same. If you make a NEW deployment, paste its link into `index.html`.)
* In the CONFIG sheet, set **APP_URL** to this site's address.

## Ultrasound / CT reporting (PACS → 📝 US / CT tab)
- Each radiologist gets three folders automatically (Generated, Ultrasound, CT scan), tracked in the RAD_FOLDERS sheet.
  New radiologists get theirs on the next "Set up/update sheets" or "🩻 Portal → Create radiologist folders now".
- The report generator saves Google Docs into the radiologist's **Generated** folder.
- In the PACS page the radiologist edits Findings / Impression (one item per line), saves, previews, and finalizes.
  Finalizing moves the Doc to their Ultrasound or CT scan folder, which the portal already searches.
- Templates are shared with X-ray ("Save as my template"), filtered by modality.
