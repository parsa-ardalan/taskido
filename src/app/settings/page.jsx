"use client"

import { Moon, Sun, Bell, Globe, Info } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">

      {/* Language */}
      <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe size={20} />
          <span className="font-medium">Language</span>
        </div>

        <span className="text-sm text-zinc-400">
          English
        </span>
      </div>

      {/* Theme */}
      <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {theme === "dark" ? <Moon size={20}/> : <Sun size={20}/>}
          <span className="font-medium">Theme</span>
        </div>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
        >
          {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </div>

      {/* Notifications */}
      <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell size={20}/>
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

      {/* App Info */}
      <div className="shadow-sm shadow-white/50 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-3">
          <Info size={20}/>
          <span className="font-medium">App Info</span>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed">
          Taskido is a daily activity management and lifestyle app designed
          for seamless organization and control. It provides a clean interface
          for managing notes, routines, and daily activities while maintaining
          an easy use experience.
        </p>
      </div>

    </div>
  )
}
