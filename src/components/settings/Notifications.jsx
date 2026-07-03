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

            // already allowed
            if (Notification.permission === "granted") {

                dispatch(toggleNotification(true))
                return
            }

            // not decided yet
            if (Notification.permission === "default") {

                const permission = await Notification.requestPermission()

                dispatch(toggleNotification(permission === "granted"))
                return
            }

            // blocked
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
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Bell size={20} />
                <span className="font-medium">Notifications</span>
            </div>

            <button
                onClick={handleNotificationToggle}
                className={`w-11 h-6 flex items-center rounded-full transition 
                   ${notification ? "bg-green-500" : "bg-zinc-600"}`}
            >
                <span
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
                       ${notification ? "translate-x-5" : "translate-x-1"}`}
                />
            </button>
        </div>
    )
}