'use client'

import { useState } from "react"

export default function Note({ title, checked }) {

    const [taskCheck, setCheck] = useState(checked);

    const toggleCheck = () => {

        setCheck(prev => {
            const next = !prev

            if ("vibrate" in navigator) {
                if (next) {
                    // ✅ task completed → short dopamine feedback
                    navigator.vibrate([20, 30, 20])
                } else {
                    // 🔁 unchecked → subtle single buzz
                    navigator.vibrate(0)
                }
            }

            return next
        })

    }


    return (

        <div
            className={`w-full h-14 rounded-2xl flex transition-all duration-300
            ${taskCheck ? "shadow-sm shadow-green-500/50" : "shadow-sm shadow-white/50"}
            `}
        >

            {/* check icon */}
            <div className="w-14 h-14 flex items-center justify-center">
                {
                    taskCheck ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-7 text-green-500 cursor-pointer"
                            onClick={toggleCheck}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    ) : (
                        <button
                            className="size-5 rounded-full border cursor-pointer"
                            onClick={toggleCheck}
                        />
                    )
                }
            </div>

            {/* note title */}
            <div className="flex items-center">
                <p className="text-md font-medium">
                    {title}
                </p>
            </div>

        </div>

    )
}
