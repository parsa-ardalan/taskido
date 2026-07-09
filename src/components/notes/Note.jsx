'use client'

import { useState } from "react"
import RemoveModal from "./modals/RemoveModal";
import EditModal from "./modals/EditModal";
import { useDispatch } from "react-redux";
import { check, pin } from "@/redux/notes/notesSlice";

export default function Note({ id, title, checked, pinned }) {

    const dispatch = useDispatch()

    const [taskCheck, setCheck] = useState(checked);
    const [noteModal, setModal] = useState(false);

    //remove 
    const [removeModal, setRemoveModal] = useState(false)

    // edit
    const [editModal, setEditModal] = useState(false)

    // pin
    const pinNote = (e) => {

        // logic
        e.stopPropagation()
        dispatch(pin(id))
    }

    // function define

    const toggleCheck = (e) => {

        dispatch(check(id))
        e.stopPropagation();

        setCheck(prev => {
            const next = !prev

            if ("vibrate" in navigator) {
                if (next) {
                    // ✅ task completed → short dopamine feedback
                    navigator.vibrate([20, 30, 20])
                } else {
                    navigator.vibrate(0)
                }
            }

            return next
        })
    }

    const toggleModal = () => {
        setModal(prev => !prev)
    }

    return (

        <div>

            {/* modals */}
            <>
                {
                    !removeModal ? (<> </>) : (<> <RemoveModal id={id} isModalClose={setRemoveModal} /> </>)
                }

                {
                    !editModal ? (<> </>) : (<> <EditModal id={id} title={title} isModalClose={setEditModal} /> </>)
                }

            </>

            {/* note */}
            <div className={`w-full h-14 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer  ${taskCheck ? "shadow-sm shadow-green-500" : "shadow-sm shadow-white/50"}`} onClick={toggleModal}>

                <div className="flex items-center w-full h-full">

                    {/* checkbox */}
                    <div
                        className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                        onClick={(e) => {
                            e.stopPropagation();
                            setModal(false);
                        }}
                    >
                        {
                            taskCheck ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="size-6.5 text-green-500 cursor-pointer transition-transform active:scale-90"
                                    onClick={toggleCheck}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            ) : (
                                <button
                                    className="size-5.5 rounded-full border border-zinc-600 transition-colors cursor-pointer"
                                    onClick={toggleCheck}
                                />
                            )
                        }
                    </div>

                    {/* note title */}
                    <div className="flex items-center pr-4 overflow-hidden">
                        <p className={`text-sm md:text-base font-medium truncate transition-all duration-300 ${taskCheck ? "text-zinc-500 line-through" : "text-white"}`}>
                            {title}
                        </p>
                    </div>
                    
                </div>

            </div>

            {/* note icons */}
            <>
                {
                    noteModal && (
                        <div className="w-full h-fit mt-3 px-3 flex items-center justify-end gap-3 transition-all duration-200">

                            {/* remove */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500" onClick={() => { setRemoveModal(true) }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>

                            {/* edit */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer text-zinc-400 transition-all active:scale-90">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" onClick={() => { setEditModal(true) }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>

                            {/* pin */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor"
                                    id="pin-icon"
                                    className={`size-5 transition-colors duration-200
                                         ${pinned ? "text-amber-500" : "text-zinc-600"
                                        }`}
                                    onClick={pinNote}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                            </div>

                        </div>
                    )
                }

            </>

        </div>
    )
}