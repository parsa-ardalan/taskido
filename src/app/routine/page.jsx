'use client'

import Image from "next/image"
import RoutineModal from "@/components/routine/RoutineModal";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { add } from "@/redux/routine/routineSlice";
import Routine from "@/components/routine/Routine";
import BackwardsButton from "@/components/backwards/BackwardsButton";

export default function RoutinePage() {

    // @ts-ignore
    const routineList = useSelector(state => state.routine)

    const suggestedRoutine = [
        {
            id: 100,
            name: "sleeping",
            time: "10:30 PM",
            icon: "/icons/bed.png"
        },
        {
            id: 101,
            name: "bath",
            time: "5:35 AM",
            icon: "/icons/shower.png"
        },
        {
            id: 102,
            name: "gym",
            time: "7:00 AM",
            icon: "/icons/gym.png"
        },
        {
            id: 103,
            name: "study",
            time: "3:30 PM",
            icon: "/icons/book.png"
        }
    ];

    const [isModalOpen, modalStatus] = useState(false);

    const dispatch = useDispatch()

    // functions
    const openModal = () => {
        modalStatus(true)
    }

    const addSuggestedRoutine = (routine) => {
        dispatch(add(routine))
    }

    return (
        <div className="w-full h-screen flex flex-col items-center">

            {/* routine modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-xs">
                    <RoutineModal modalStatus={modalStatus} />
                </div>
            )}

            {/* routine content */}
            <div className="page max-w-4xl mx-auto">

                <BackwardsButton />

                {/* suggested routine */}
                <div className="w-full grid grid-cols-4 gap-3 mb-5 mt-10">
                    {
                        suggestedRoutine.map((routine) => (
                            <div
                                className="col-span-1 flex flex-col sm:flex-row gap-2 items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 active:scale-95"
                                key={routine.id}
                                onClick={() => addSuggestedRoutine(routine)}
                            >
                                <Image width={30} height={30} alt={routine.name} src={routine.icon} className="object-contain" />

                            </div>
                        ))
                    }
                </div>

                <hr className="border-zinc-800 my-5" />

                {/* routine box */}
                <div className="w-full h-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                        {
                            routineList.map((routine) => (
                                <Routine
                                    name={routine.name}
                                    time={routine.time}
                                    icon={routine.icon}
                                    id={routine.id}
                                    key={routine.id}
                                />
                            ))
                        }
                    </div>

                    <div
                        className="fixed bottom-6 right-6 md:relative md:bottom-auto md:right-auto w-auto rounded-full md:w-full h-fit mt-10 flex items-center justify-center z-40 backdrop-blur-xs"
                        dir="rtl"
                    >
                        <button
                            className="size-12 shadow-xs shadow-green-500 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none"
                            onClick={openModal}
                            aria-label="Add new note"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}