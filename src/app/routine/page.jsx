'use client'

import Image from "next/image"
import RoutineModal from "@/components/routine/RoutineModal";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/redux/routine/routineSlice";

export default function Routine() {


    const routineList = useSelector(state => state.routine.value)
    console.log(routineList)


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

    const addSuggestedRoutine = (index) => {
        dispatch(add(index))
    }

    return (
        <div className="w-screen h-screen py-8">

            {/* routine modal */}
            {
                !isModalOpen ? (
                    <div className="hidden"> </div>
                ) : (
                    <div>
                        <RoutineModal modalStatus={modalStatus} />
                    </div>
                )
            }

            {/* routine content */}
            <div className="page">

                {/* suggested routines */}
                <div className="w-full h-32 grid grid-cols-4">
                    {
                        suggestedRoutine.map((routine) => (
                            <div className="col-span-1 flex items-center justify-center" key={routine.id} onClick={() => { addSuggestedRoutine(routine) }}>
                                <Image width={35} height={35} alt={routine.name} src={routine.icon} />
                            </div>
                        ))
                    }
                </div>

                <hr />

                {/* user routine */}
                <div className="w-full h-auto grid gap-5 py-5">
                    {
                        routineList.map((routine) => (
                            <div className="w-full h-20 flex" key={routine.id}>

                                <div className="w-1/4 h-full flex items-center justify-center">
                                    <Image src={routine.icon} width={35} height={35} alt="icon" />
                                </div>

                                <div className="h-full w-2/4 flex items-center justify-start">
                                    <h3 className="text-lg text-white"> {routine.name} </h3>
                                </div>

                                <div className="h-full w-1/4 flex items-center justify-center text-sm text-white/50"> {routine.time} </div>
                            </div>
                        ))
                    }

                    <button className="w-full h-14 text-md bg-green-500/15 rounded-xl flex items-center justify-center" onClick={openModal}>
                        add new routine
                    </button>

                </div>

            </div>

        </div>
    )
}