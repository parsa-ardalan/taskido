import { useDispatch } from "react-redux"
import { add } from "@/redux/routine/routineSlice"
import { useState } from "react"

export default function RoutineModal(props) {
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [error, setError] = useState(false)

    const addNewRoutine = () => {
        if (name.trim() === "") {
            setError(true)
            return
        }

        dispatch(
            add({
                name: name,
                time: time,
                icon: "/icons/daily.png",
            })
        )

        props.modalStatus(false)
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md px-4"
            onClick={() => props.modalStatus(false)}
        >
            <div
                className="w-full max-w-sm h-fit shadow-sm shadow-white/50 rounded-2xl p-5 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setError(false)
                        }}
                        className={`w-full h-14 text-lg bg-transparent border-b outline-none px-1 duration-300 text-white placeholder-zinc-500 focus:border-zinc-400 transition-colors ${
                            error
                                ? "border-red-500 focus:border-red-500"
                                : "border-zinc-700"
                        }`}
                        placeholder="add new routine"
                    />

                    <div className="w-full flex items-center mt-8 text-white">
                        <span className="font-medium text-zinc-300">Time:</span>

                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="outline-none ml-3 text-base text-white px-3 py-1 rounded-lg focus:border-zinc-600 transition-colors bg-transparent"
                        />
                    </div>
                </div>

                <div className="w-full flex items-end mt-8">
                    <button
                        onClick={addNewRoutine}
                        className="w-full h-14 text-sm md:text-base shadow-sm shadow-green-500 rounded-2xl flex items-center justify-center active:scale-95 transition-all duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-green-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}