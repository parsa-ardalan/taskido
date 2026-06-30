import { useDispatch } from "react-redux"
import { add, routineSlice } from "@/redux/routine/routineSlice"

export default function RoutineModal(props) {

    // redux
    const dispatch = useDispatch()

    // add new routine function
    const addNewRoutine = () => {

        const routineInfo = {
            name: document.getElementById("routine-name").value,
            time: document.getElementById("routine-time").value,
            icon: "/icons/daily.png"
        }

        dispatch(add(routineInfo))

        props.modalStatus(false);
    }

    return (

        <div className="w-full h-full fixed bg-black/50 flex items-center justify-center">

            {/* routine box */}
            <div className="w-4/5 h-1/2 bg-white/15 rounded-xl backdrop-blur-lg p-5">

                {/* name and time div */}
                <div className="w-full h-1/2">

                    <input type="text" id="routine-name" className="w-full h-14 text-lg border-b outline-none px-1 duration-300 focus:px-3" placeholder="routine name" />

                    {/* time div */}
                    <div className="w-full h-auto flex mt-10">

                        <span className="text-lg"> Time: </span>

                        <input type="time" id="routine-time" className="outline-none ml-3 text-lg" />

                    </div>

                </div>

                {/* submit div */}
                <div className="w-full h-1/2 flex items-end">

                    <button className="w-full h-14 text-md bg-green-500/15 rounded-xl flex items-center justify-center" onClick={addNewRoutine}>
                        add new routine
                    </button>

                </div>


            </div>

        </div>
    )
}