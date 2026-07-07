'use client'

import Image from "next/image";
import { useState } from "react";
import RemoveModal from "./RemoveModal";
import EditModal from "./EditModal";

export default function Routine({ name, time, icon, id }) {

    // routine modal
    const [routineModal, setModal] = useState(false);

    //remove 
    const [removeModal, setRemoveModal] = useState(false)

    // edit
    const [editModal, setEditModal] = useState(false)

    // toggles and functions
    const toggleModal = () => {
        setModal(prev => !prev)
    }

    return (

        <div className="w-full">

            {/* modals */}
            <>
                {
                    !removeModal ? (<> </>) : (<> <RemoveModal id={id} isModalClose={setRemoveModal} /> </>)
                }

                {
                    !editModal ? (<> </>) : (<> <EditModal id={id} name={name} isModalClose={setEditModal} time={time} /> </>)
                }

            </>

            {/* routine box */}
            <div className="w-full min-h-20 rounded-2xl px-3 flex transition-all duration-300 cursor-pointer" onClick={toggleModal}>

                <div className="w-1/4 h-full min-h-20 flex items-center justify-center">
                    <Image src={icon} width={35} height={35} alt="icon" />
                </div>

                <div className="h-full min-h-20 w-2/4 flex items-center justify-start">
                    <h3 className="text-md truncate"> {name} </h3>
                </div>

                <div className="h-full min-h-20 w-1/4 flex items-center justify-center text-sm opacity-50 text-center"> {time} </div>
            </div>

            {/* routine icons */}
            <>
                {
                    routineModal && (
                        <div className="w-full h-fit mt-3 sm:mt-4 pr-1 sm:pr-3 flex items-center justify-end gap-2 sm:gap-3">

                            {/* remove */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500 transition-colors duration-200" onClick={() => { setRemoveModal(true) }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>

                            {/* edit */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-zinc-400 transition-colors duration-200" onClick={() => { setEditModal(true) }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>

                            {/* pin */}
                            <div className="size-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor"
                                    id="pin-icon"
                                    className={`size-5 transition-colors duration-200 text-zinc-500`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                            </div>

                        </div>
                    )
                }

            </>

        </div >

    )
}