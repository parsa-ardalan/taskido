"use client";

import { useEffect, useRef, useState } from "react";

export default function PWARegister({ mode = "banner" }) {
    const [updateReady, setUpdateReady] = useState(false);

    const registrationRef = useRef(null);
    const refreshingRef = useRef(false);

    useEffect(() => {
        if (!("serviceWorker" in navigator)) {
            return;
        }

        // -----------------------------
        // Development mode cleanup
        // -----------------------------
        if (process.env.NODE_ENV !== "production") {
            const cleanupDevServiceWorkers = async () => {
                try {
                    const registrations = await navigator.serviceWorker.getRegistrations();

                    if (registrations.length === 0) return;

                    await Promise.all(
                        registrations.map((registration) => registration.unregister())
                    );

                    console.log(
                        "🧹 Dev Mode: Active Service Workers successfully unregistered."
                    );

                    if ("caches" in window) {
                        const names = await caches.keys();
                        await Promise.all(names.map((name) => caches.delete(name)));

                        console.log("🧹 Dev Mode: Service Worker caches cleared.");
                    }

                    window.location.reload();
                } catch (error) {
                    console.error("❌ Dev Mode SW cleanup failed:", error);
                }
            };

            cleanupDevServiceWorkers();
            return;
        }

        // -----------------------------
        // Production mode registration
        // -----------------------------

        const sendSkipWaiting = () => {
            const registration = registrationRef.current;

            if (!registration || !registration.waiting) {
                return;
            }

            registration.waiting.postMessage({ type: "SKIP_WAITING" });
        };

        const handleControllerChange = () => {
            if (refreshingRef.current) {
                return;
            }

            refreshingRef.current = true;
            window.location.reload();
        };

        navigator.serviceWorker.addEventListener(
            "controllerchange",
            handleControllerChange
        );

        let cleanupFn = null;

        const registerServiceWorker = async () => {
            try {
                const registration = await navigator.serviceWorker.register("/sw.js");
                registrationRef.current = registration;

                console.log(
                    "⚡ PWA Service Worker registered successfully:",
                    registration.scope
                );

                // اگر از قبل SW جدید در حالت waiting مانده باشد
                if (registration.waiting && navigator.serviceWorker.controller) {
                    if (mode === "auto") {
                        sendSkipWaiting();
                    } else {
                        setUpdateReady(true);
                    }
                }

                registration.addEventListener("updatefound", () => {
                    const installingWorker = registration.installing;

                    if (!installingWorker) {
                        return;
                    }

                    installingWorker.addEventListener("statechange", () => {
                        if (
                            installingWorker.state === "installed" &&
                            navigator.serviceWorker.controller
                        ) {
                            console.log("✨ New Service Worker update is ready.");

                            if (mode === "auto") {
                                registration.waiting?.postMessage({ type: "SKIP_WAITING" });
                            } else {
                                setUpdateReady(true);
                            }
                        }
                    });
                });

                await registration.update();

                const handleFocus = () => {
                    registration.update().catch(() => { });
                };

                const handleOnline = () => {
                    registration.update().catch(() => { });
                };

                window.addEventListener("focus", handleFocus);
                window.addEventListener("online", handleOnline);

                const intervalId = window.setInterval(() => {
                    registration.update().catch(() => { });
                }, 30 * 60 * 1000);

                cleanupFn = () => {
                    window.removeEventListener("focus", handleFocus);
                    window.removeEventListener("online", handleOnline);
                    window.clearInterval(intervalId);
                };
            } catch (error) {
                console.error("❌ PWA Service Worker registration failed:", error);
            }
        };

        registerServiceWorker();

        return () => {
            navigator.serviceWorker.removeEventListener(
                "controllerchange",
                handleControllerChange
            );

            if (cleanupFn) {
                cleanupFn();
            }
        };
    }, [mode]);

    const handleUpdate = () => {
        const registration = registrationRef.current;

        if (!registration || !registration.waiting) {
            window.location.reload();
            return;
        }

        registration.waiting.postMessage({ type: "SKIP_WAITING" });
    };

    const handleDismiss = () => {
        setUpdateReady(false);
    };

    if (!updateReady || mode !== "banner") {
        return null;
    }

    return (
        <div
            dir="rtl"
            className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-md shadow-sm shadow-white/50 rounded-2xl p-5 text-white backdrop-blur-md"
        >
            <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-lg">✨</span>
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold"> Update available </p>

                    <p className="mt-1 text-xs leading-5 text-white/70">
                        To use the better version app, more features and less bugs, update the app.
                    </p>
                </div>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    type="button"
                    onClick={handleUpdate}
                    className="flex-1 rounded-2xl shadow-sm shadow-green-500 text-green-500 px-3 py-2 text-sm font-bold transition"
                >
                    update now
                </button>

                <button
                    type="button"
                    onClick={handleDismiss}
                    className="flex-1 rounded-2xl shadow-sm shadow-white-50 text-white/50 px-3 py-2 text-sm font-bold transition"
                >
                    later
                </button>
            </div>
        </div>
    );
}
