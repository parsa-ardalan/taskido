'use client'

import { edit } from "@/redux/routine/routineSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function EditModal({ id, name, time, isModalClose }) {

    const dispatch = useDispatch()

    const [value, setValue] = useState(name)
    const [timeValue, setTimeValue] = useState(time)
    const [error, setError] = useState(false)

    const updateModal = () => {

        if (value.trim() === "") {
            setError(true)
            return
        }

        dispatch(edit({
            id: id,
            name: value,
            time: timeValue
        }))

        isModalClose(false)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md px-4">

            <div className="w-full max-w-sm h-fit shadow-sm shadow-white/50 rounded-2xl p-5 transition-all duration-300">

                <div className="w-full">

                    <input
                        type="text"
                        className={`w-full h-14 text-lg bg-transparent border-b outline-none px-1 duration-300 text-white placeholder-zinc-500 focus:border-zinc-400 transition-colors
                        ${error ? "border-red-500 focus:border-red-500" : "border-zinc-700"}`}
                        value={value}
                        placeholder={name}
                        onChange={(e) => {
                            setValue(e.target.value)
                            setError(false)
                        }}
                    />

                    <div className="w-full flex items-center mt-8 text-white">

                        <span className="font-medium text-zinc-300">Time:</span>

                        <input
                            type="time"
                            className="outline-none ml-3 text-base text-white px-3 py-1 focus:border-zinc-600 transition-colors"
                            value={timeValue}
                            onChange={(e) => setTimeValue(e.target.value)}
                        />

                    </div>

                </div>

                <div className="w-full flex items-end mt-8">

                    <button
                        onClick={updateModal}
                        className="w-full h-14 text-sm md:text-base shadow-sm shadow-green-500 rounded-2xl flex items-center justify-center active:scale-95 transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>

                </div>

            </div>

        </div>
    )
}
