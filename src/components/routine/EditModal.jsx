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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-lg">

            <div className="w-4/5 h-1/2 shadow-sm shadow-white/50 rounded-xl p-5">

                <div className="w-full h-1/2">

                    <input
                        type="text"
                        className={`w-full h-14 text-lg border-b outline-none px-1 duration-300 focus:px-3
                        ${error ? "border-red-500" : "border-white"}`}
                        value={value}
                        placeholder={name}
                        onChange={(e) => {
                            setValue(e.target.value)
                            setError(false)
                        }}
                    />

                    <div className="w-full flex mt-10">

                        <span className="text-lg">Time:</span>

                        <input
                            type="time"
                            className="outline-none ml-3 text-lg"
                            value={timeValue}
                            onChange={(e) => setTimeValue(e.target.value)}
                        />

                    </div>

                </div>

                <div className="w-full h-1/2 flex items-end">

                    <button
                        onClick={updateModal}
                        className="w-full h-14 text-md shadow-sm shadow-green-500/50 text-green-500 rounded-xl flex items-center justify-center"
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
