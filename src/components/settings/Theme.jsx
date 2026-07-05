"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Theme() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // جلوگیری از Hydration mismatch در SSR
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
                <span className="font-medium">Theme</span>
            </div>

            {/* <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-white"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            <button
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-white"
                aria-label="Toggle Theme"
            >
                <Sun size={18} />
            </button>
            
        </div>
    )
}
