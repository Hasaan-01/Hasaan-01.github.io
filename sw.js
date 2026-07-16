const CACHE_NAME = 'hasaan-portfolio-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/dist/styles.css',
  '/project-ai-automation.html',
  '/project-attendance-system.html',
  '/project-department-dashboard.html',
  '/project-devops-dashboard.html',
  '/project-employee-skills.html',
  '/project-lars-chatbot.html',
  '/project-leave-app.html',
  '/images/about-me.png',
  '/images/lars-chatbot/thumbnail.png',
  '/images/department-dashboard/thumbnail.png',
  '/images/devops-dashboard/thumbnail.png',
  '/images/attendance-system/thumbnail.png',
  '/images/leave-app/thumbnail.png',
  '/images/employee-skills/thumbnail.png'
];

// Install: Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.log('Cache install failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip external requests (CDNs, APIs)
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if found
      if (cachedResponse) {
        // Fetch update in background (stale-while-revalidate)
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
          })
          .catch(() => {});
        
        return cachedResponse;
      }

      // Not in cache, fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          // Cache the new response
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Network failed, try to return offline fallback
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
