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
        <div
            className="w-full h-full fixed inset-0 z-50 flex items-center justify-center px-5 backdrop-blur-lg bg-black/25"
            onClick={() => isModalClose(false)}
        >

            <div
                className="w-full max-w-md h-14 flex gap-3"
                dir="rtl"
                onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک روی باکس محتوا
            >

                {/* button */}
                <div className="w-1/5 h-full flex items-center justify-center">
                    <button
                        className="w-12 h-12 shadow-xs shadow-green-500 rounded-full flex items-center justify-center active:scale-90 transition-all duration-300"
                        onClick={updateModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>
                </div>

                {/* input box */}
                <div className="w-4/5 h-full">

                    <input
                        id="note-input"
                        dir="ltr"
                        type="text"
                        className="
                        duration-300
                    w-full h-14 text-sm md:text-base
                    rounded-2xl flex
                     shadow-sm shadow-white/50
                   outline-none px-3
                   "
                        placeholder={title}
                        value={value} // اینجا باید value state باشد
                        onChange={(e) => setValue(e.target.value)} // و این خط برای به‌روزرسانی state اضافه شود
                        autoFocus
                    />

                </div>

            </div>

        </div>
    )
}