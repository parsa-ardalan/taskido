'use client'

import Image from "next/image"
import RoutineModal from "@/components/routine/RoutineModal";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { add } from "@/redux/routine/routineSlice";
import Routine from "@/components/routine/Routine";

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
        <div className="w-full min-h-screen py-8 flex flex-col items-center">

            {/* routine modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-xs">
                    <RoutineModal modalStatus={modalStatus} />
                </div>
            )}

            {/* routine content */}
            <div className="page max-w-4xl mx-auto w-full px-4 sm:px-6">

                <div className="w-full grid grid-cols-4 gap-3 mb-5">
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

                <div className="w-full h-auto py-3">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
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

                    <button
                        className="w-full h-14 text-sm font-semibold text-green-500 shadow-sm shadow-green-500 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer active:scale-[0.99]"
                        onClick={openModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        add new routine
                    </button>

                </div>

            </div>

        </div>
    )
}