import { add } from "@/redux/notes/notesSlice"
import { startTaskReminder } from "@/utils/notes/notificationManager";
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";

export default function NoteModal(props) {

    // redux
    const dispatch = useDispatch()
    const notificationStatus = useSelector(state => state.settings.notification)

    // add new routine function
    const addNewNote = () => {

        const noteText = document.getElementById("note-input")

        if (noteText.value === "") return

        const newNote = {
            id: nanoid(),
            title: noteText.value
        }

        dispatch(add(newNote))

        notificationStatus ? startTaskReminder(newNote) : console.log("can't set reminder. notification is closed")

        props.modalStatus(false)
    }

    return (
        <div
            className="w-full h-full fixed inset-0 z-50 flex items-center justify-center px-10 backdrop-blur-lg bg-black/25"
            onClick={() => props.modalStatus(false)}
        >

            {/* note box */}
            <div
                className="w-full max-w-md h-14 flex gap-3"
                dir="rtl"
                onClick={(e) => e.stopPropagation()}
            >

                {/* button */}
                <div className="w-1/5 h-full flex items-center justify-center">
                    <button
                        className="w-12 h-12 shadow-xs shadow-green-500 rounded-full flex items-center justify-center active:scale-90 transition-all duration-300"
                        onClick={addNewNote}
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
                        placeholder="add new task"
                        autoFocus
                    />
                </div>

            </div>

        </div>
    )
}
