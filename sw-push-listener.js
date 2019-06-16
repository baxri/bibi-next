console.log('service push listener!')

self.addEventListener('push', (event) => {
    const title = 'Get Started With Workbox';
    const options = {
        body: event.data.text()
    };
    event.waitUntil(self.registration.showNotification(title, options));
});