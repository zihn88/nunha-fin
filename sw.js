self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Kosong saja tidak apa-apa, yang penting ada event fetch
    // agar memenuhi syarat PWA dari Google Chrome.
});
