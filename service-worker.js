"use strict";

const CACHE_NAME = "531-treningslogg-shell-v4";
const APP_FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    for (const file of APP_FILES) {
      const url = new URL(file, self.registration.scope);
      const freshUrl = new URL(url);
      freshUrl.searchParams.set("__precache", CACHE_NAME);
      const response = await fetch(freshUrl, { cache: "reload" });
      if (!response.ok) throw new Error(`Could not cache ${url.pathname}: ${response.status}`);
      await cache.put(url, response);
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith("531-treningslogg-shell-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  if (new URL(request.url).href === new URL("./service-worker.js", self.registration.scope).href) return;
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
