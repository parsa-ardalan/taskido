'use client'

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Edit3, Check, X } from "lucide-react";

import { editName, editBio } from "@/redux/profile/userSlice";

export default function ProfileBox() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);

    const [isEditMode, setMode] = useState(false);

    const [tempName, setTempName] = useState(userInfo?.name || "");
    const [tempBio, setTempBio] = useState(userInfo?.bio || "");

    const handleSave = () => {
        dispatch(editName(tempName)); //name
        dispatch(editBio(tempBio)); //bio
        setMode(false);
    };


    return (
        <div className="relative w-full h-fit mt-5 rounded-2xl shadow-sm shadow-white/50 p-5 flex flex-col justify-center transition-all duration-500">

            {!isEditMode && (
                <button
                    onClick={() => setMode(true)}
                    className="absolute bottom-5 right-5 text-zinc-500 transition-colors"
                >
                    <Edit3 className="w-4 h-4" />
                </button>
            )}

            {isEditMode ? (
                <div className="flex flex-col gap-8 animate-in zoom-in-95 duration-200">
                    <input
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="bg-transparent text-white text-base sm:text-lg border-b border-zinc-700 focus:border-zinc-400 outline-none w-full pb-2 pl-1 transition-colors"
                        placeholder="your name..."
                        autoFocus
                    />
                    <input
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        className="bg-transparent text-zinc-400 text-base sm:text-lg border-b border-zinc-700 focus:border-zinc-400 outline-none w-full pb-2 pl-1 transition-colors"
                        placeholder="write a bio..."
                    />
                    <div className="flex flex-wrap gap-4 mt-3">
                        <button onClick={handleSave} className="flex items-center gap-1 text-[12px] text-green-500 transition-colors uppercase tracking-widest font-bold">
                            <Check className="w-4 h-4" /> save
                        </button>
                        <button onClick={() => setMode(false)} className="flex items-center gap-1 text-[12px] text-zinc-500 transition-colors uppercase tracking-widest font-bold">
                            <X className="w-4 h-4" /> cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-2 pr-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white  tracking-tight lowercase break-words">
                        {userInfo?.name || "user"}
                    </h2>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-full sm:max-w-[85%] break-words">
                        {userInfo?.bio || "no bio yet. click edit to add one."}
                    </p>
                </div>
            )}
        </div>
    )
}
