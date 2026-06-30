'use client'

import { useSelector } from "react-redux";
import ExpiredTask from "@/components/notes/ExpiredTask";

export default function Expired() {

    const notesList = useSelector(state => state.notes)

    const expiredNotesList = notesList.filter(
        (note) => note.status === "expired"
    );

    return (

        <div className='page flex flex-col items-center'>

            {expiredNotesList.length === 0 ? (

                <div className="flex flex-col items-center justify-center mt-32 gap-6">

                    <div className="relative flex items-center justify-center">

                        <div className="absolute w-24 h-24 bg-green-500/20 blur-2xl rounded-full animate-pulse" />

                        <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                        </div>

                    </div>

                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent">
                        No expired tasks
                    </h1>

                    <p className="text-white/60 text-center max-w-md leading-7">
                        you handled everything yesterday.
                        nothing slipped through the cracks.
                    </p>

                </div>


            ) : (

                <>
                    <h1 className="text-2xl text-center my-10">
                        yesterday tasks (expired)
                    </h1>

                    <div className="w-full h-auto grid grid-cols-1 gap-3 px-6">

                        {expiredNotesList.map((note) => (
                            <ExpiredTask
                                key={note.id}
                                title={note.title}
                                id={note.id}
                            />
                        ))}

                    </div>
                </>

            )}

        </div>

    )
}