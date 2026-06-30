import { edit } from "@/redux/notes/notesSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function EditModal({ id, title, isModalClose }) {

    const dispatch = useDispatch()

    const [value, setValue] = useState(title)

    const updateModal = () => {
        dispatch(edit({ id: id, title: value }))
        isModalClose(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg">

            <div className="w-4/5 h-14 flex gap-3" dir="rtl">

                {/* button */}
                <div className="w-1/5 h-full flex items-center justify-center">
                    <button
                        className="w-12 h-12 shadow-xs shadow-green-500/50 rounded-full flex items-center justify-center"
                        onClick={updateModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>
                </div>

                {/* input */}
                <div className="w-4/5 h-full">
                    <input
                        dir="ltr"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full h-14 text-md rounded-2xl shadow-sm shadow-white/50 outline-0 px-3 duration-300"
                    />
                </div>

            </div>

        </div>
    )
}
