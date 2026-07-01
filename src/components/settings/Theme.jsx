"use client"

import { changeTheme } from "@/redux/settings/seetingsSlice"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function Theme() {

    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-[60px]" />
    }

    const isDark = resolvedTheme === "dark"

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark"

        setTheme(newTheme)
        dispatch(changeTheme(newTheme))
    }

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
                <span className="font-medium">Theme</span>
            </div>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-white"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>
    )
}
