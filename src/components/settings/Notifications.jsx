'use client'

import { toggleNotification } from "@/redux/settings/settingsSlice"
import { Bell } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Notifications() {

    const notification = useSelector(state => state.settings.notification)
    const dispatch = useDispatch()

    useEffect(() => {
        const initializeNotification = async () => {
            if (!("Notification" in window)) return
            if (Notification.permission === "granted") {
                dispatch(toggleNotification(true))
                return
            }
            if (Notification.permission === "default") {
                const permission = await Notification.requestPermission()
                dispatch(toggleNotification(permission === "granted"))
                return
            }
            if (Notification.permission === "denied") {
                dispatch(toggleNotification(false))
            }
        }
        initializeNotification()
    }, [dispatch])

    const handleNotificationToggle = async () => {
        if (!("Notification" in window)) return
        if (Notification.permission === "default") {
            const permission = await Notification.requestPermission()
            dispatch(toggleNotification(permission === "granted"))
            return
        }
        if (Notification.permission === "granted") {
            dispatch(toggleNotification(!notification))
            return
        }
        if (Notification.permission === "denied") {
            alert("Notifications are blocked. Please enable them in browser settings.")
        }
    }

    return (
        <div className="border border-zinc-800 shadow-sm white/50 rounded-2xl p-4 flex items-center justify-between transition-all duration-300">
            
            <div className="flex items-center gap-3 text-white">
                <Bell size={20} className="text-zinc-600 text-zinc-400" />
                <span className="font-medium text-sm sm:text-base">Notifications</span>
            </div>

            <button
                onClick={handleNotificationToggle}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 active:scale-95 cursor-pointer
                   ${notification ? "bg-emerald-500" : "bg-zinc-700"}`}
                aria-label="Toggle Notifications"
            >
                <span
                    className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 
                       ${notification ? "translate-x-6" : "translate-x-0"}`}
                />
            </button>
            
        </div>
    )
}
