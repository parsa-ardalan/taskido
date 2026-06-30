import { add } from "@/redux/notes/notesSlice"
import { useDispatch } from "react-redux"

export default function NoteModal(props) {

    // redux
    const dispatch = useDispatch()

    // add new routine function
    const addNewNote = () => {

        const noteText = document.getElementById("note-input");

        if (noteText.value == "") {
            noteText.classList.remove("shadow-white/50")
            noteText.classList.add("shadow-red-500")
            noteText.classList.add("-mt-3")
            console.log("please enter a note")
        } else {

            noteText.classList.add("shadow-white/50")
            dispatch(add(noteText.value))
            props.modalStatus(false)
        }


    }


    return (
        <div className="w-full h-full fixed flex items-center justify-center bg-black/50 backdrop-blur-lg">

            {/* routine box */}
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