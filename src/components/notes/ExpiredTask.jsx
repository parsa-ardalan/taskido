'use client'

import { useDispatch } from "react-redux"
import { restore } from "@/redux/notes/notesSlice"

export default function ExpiredTask({ id, title }) {

    const dispatch = useDispatch()

    // functions
    const restoreTask = () => {
        dispatch(restore(id))
    }


    return (

        <div className='w-full h-14 px-3 shadow-sm shadow-white/50 rounded-2xl flex items-center justify-between duration-300'>

            {/* note title */}
            <div className="flex items-center overflow-hidden">
                <p className="text-sm md:text-base truncate px-2">
                    {title}
                </p>
            </div>

            {/* restore icon */}
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">

                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.8} 
                    stroke="currentColor" 
                    className="size-5    cursor-pointer transition-all duration-300 active:scale-90" 
                    onClick={restoreTask}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>


            </div>

        </div>
    )
}