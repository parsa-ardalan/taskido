'use client'

import { useSelector } from "react-redux";
import ExpiredTask from "@/components/notes/ExpiredTask";
import BackwardsButton from "@/components/backwards/BackwardsButton";

export default function Expired() {

    // @ts-ignore
    const notesList = useSelector(state => state.notes)

    // @ts-ignore
    const expiredNotesList = notesList.filter(
        (note) => note.status === "expired"
    );

    return (
        <div className='page flex flex-col items-center mx-auto max-w-7xl w-full min-h-screen pb-12'>

            <BackwardsButton />

            {expiredNotesList.length === 0 ? (

                <div className="flex flex-col items-center justify-center mt-36 gap-6 px-4 w-full">

                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-green-500/20 blur-2xl rounded-full animate-pulse" />
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent text-center">
                        No expired tasks
                    </h1>

                    <p className="text-zinc-400 text-sm md:text-base text-center max-w-md leading-relaxed px-2">
                        you handled everything yesterday.
                        nothing slipped through the cracks.
                    </p>

                </div>
            ) : (
                <>

                    <h1 className="text-2xl lg:text-3xl text-center my-6 md:my-10 font-medium">
                        yesterday tasks (expired)
                    </h1>

                    {/* 
                      سیستم گرید کاملاً ریسپانسیو:
                      - موبایل: 1 ستونه
                      - تبلت: 2 ستونه (md:grid-cols-2)
                      - لپ‌تاپ: 3 ستونه (lg:grid-cols-3)
                      - دسکتاپ بزرگ: 4 ستونه (xl:grid-cols-4)
                    */}
                    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8">
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
