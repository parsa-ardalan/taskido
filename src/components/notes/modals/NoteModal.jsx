import { add } from "@/redux/notes/notesSlice"
import { startTaskReminder } from "@/utils/notes/notificationManager";
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";

export default function NoteModal(props) {

    // redux
    const dispatch = useDispatch()
    const noteList = useSelector(state => state.notes)
    const notificationStatus = useSelector(state => state.settings.notification)
    console.log(noteList)

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
        <div className="w-full h-full fixed flex items-center justify-center bg-black/50 backdrop-blur-lg">

            {/* note box */}
            <div className="w-4/5 h-14 flex gap-3" dir="rtl">

                {/* button */}
                <div className="w-1/5 h-full flex items-center justify-center">
                    <button className="w-12 h-12 shadow-xs shadow-green-500/50 rounded-full flex items-center justify-center" onClick={addNewNote}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
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
                    w-full h-14 text-md
                    rounded-2xl flex
                     shadow-sm shadow-white/50 
                   outline-0 px-3
                   "
                        placeholder="add new task"
                    />
                </div>

            </div>

        </div>
    )
}