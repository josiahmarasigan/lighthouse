/* Service worker for the SIMC Radiology Portal.
 * Keeps the portal's screens (page, icons, manifest) available so the app opens instantly.
 * Only files from this GitHub site are stored. Requests to Google (the /exec link: logins, patient lists, results)
 * and to cdnjs are never touched, so no patient data is ever stored on the phone by this file.
 * Change VERSION whenever you upload a new index.html so phones pick up the new version quickly. */
const VERSION = 'simc-portal-v18';
const SHELL = ['./', 'index.html', 'pacs.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-192.png', 'icons/maskable-512.png',
  'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'icons/favicon.ico', 'icons/logo-256.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;   // Google, cdnjs: never touched
  // network first (so updates show up at once), stored copy only when offline
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
