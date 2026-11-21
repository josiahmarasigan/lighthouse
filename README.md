# Lighthouse app page

This small website turns the Lighthouse church app into an app people can install on their phones: it gets the Lighthouse logo on the home screen, opens full screen and shows a splash while it loads. The church app itself still runs on Google Apps Script; this page only holds it.

It is free. GitHub Pages hosts it at no cost.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The app page. **You change one line in it**: your web app link. |
| `manifest.webmanifest` | Tells phones the app's name, colours and icon. |
| `sw.js` | Keeps the page and logo saved on the phone so the splash opens quickly. |
| `icons/` | The Lighthouse logo in the sizes phones need. |

## Setting it up (about 15 minutes, one time)

### 1. Get your web app link
In Apps Script: **Deploy → Manage deployments**. Copy the **Web app** URL. It ends in `/exec`.

### 2. Paste it into index.html
Open `index.html` in any text editor (on a phone, the GitHub editor works too). Near the top, find:

```
window.LIGHTHOUSE_APP_URL = 'PASTE_YOUR_WEB_APP_URL_HERE';
```

Replace `PASTE_YOUR_WEB_APP_URL_HERE` with your link. Keep the quote marks. Save.

### 3. Put the files on GitHub
1. Go to github.com and create a free account (a church email is a good choice).
2. Tap **+** (top right) → **New repository**. Name it `lighthouse`. Choose **Public**. Tap **Create repository**.
3. Tap **uploading an existing file**. Drag in **everything inside this folder**, including the `icons` folder. Tap **Commit changes**.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Tap **Save**.
5. Wait 1–2 minutes and refresh. GitHub shows your link, for example `https://yourname.github.io/lighthouse/`.

### 4. Tell the church app about the page
In Lighthouse: **Manage → Settings → APP_SHELL_URL**. Paste the GitHub link from step 3 (with `https://` and the `/` at the end). Save.

From then on, emails and "copy link" buttons point to the app page, and only that page may show Lighthouse inside it.

### 5. Try it
- **Android (Chrome):** open the link and tap **Install** on the blue bar (or ⋮ → **Install app**).
- **iPhone (Safari):** open the link, tap **Share** → **Add to Home Screen**.
- Open the new icon, sign in, and move around for a minute.

## Good to know
- **Updates to the church app need no changes here.** When you deploy a new version in Apps Script, the installed app shows it next time it opens.
- **Keep the same deployment.** Always use **Manage deployments → Edit → New version**, never **New deployment**: a new deployment gets a different link and the app page would point at the old one.
- **Changing the logo:** replace the files in `icons/` with ones of the same names and sizes.
- **Messenger links:** when someone opens the link inside Messenger or Facebook, the app shows a screen asking them to open it in Chrome or Safari, where they can install it.
- **A small Google notice** ("created by a Google Apps Script user") may still appear for people outside your Google Workspace. That's Google's and can't be removed.
- **Your own web address** (like `app.lighthousesiargao.com`) is optional. It costs about ₱600–₱900 a year for the domain; GitHub Pages can use it for free.
