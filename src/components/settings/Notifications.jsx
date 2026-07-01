import { useState } from "react"
import { Bell } from "lucide-react"


export default function Notifications() {

    const [notifications, setNotifications] = useState(true)

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Bell size={20} />
                <span className="font-medium">Notifications</span>
            </div>

            <button
                onClick={() => setNotifications(!notifications)}
                className={`w-11 h-6 flex items-center rounded-full transition 
                   ${notifications ? "bg-green-500" : "bg-zinc-600"}`}
            >
                <span
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
                       ${notifications ? "translate-x-5" : "translate-x-1"}`}
                />
            </button>
        </div>
    )
}