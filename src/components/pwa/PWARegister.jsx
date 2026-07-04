'use client';

import { useEffect } from 'react';

export default function PWARegister() {
    useEffect(() => {
        if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
            return;
        }

        if (process.env.NODE_ENV === 'production') {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('⚡ PWA Service Worker registered successfully:', registration.scope);
                })
                .catch((error) => {
                    console.error('❌ PWA Service Worker registration failed:', error);
                });
        } else {

            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister().then((success) => {
                        if (success) {
                            console.log('🧹 Dev Mode: Active Service Worker found and successfully unregistered.');

                            if ('caches' in window) {
                                caches.keys().then((names) => {
                                    for (const name of names) {
                                        caches.delete(name);
                                    }
                                    console.log('🧹 Dev Mode: Service Worker caches cleared.');
                                });
                            }

                            window.location.reload();
                        }
                    });
                }
            });
        }
    }, []);

    return null;
}