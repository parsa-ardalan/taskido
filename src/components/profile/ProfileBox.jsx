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
        <div className="relative w-full h-fit shadow-sm shadow-white/50 rounded-2xl mt-5 p-6 flex flex-col justify-center transition-all duration-500">

            {!isEditMode && (
                <button
                    onClick={() => setMode(true)}
                    className="absolute bottom-6 right-6 text-white/30 hover:text-white transition-colors"
                >
                    <Edit3 className="w-4 h-4" />
                </button>
            )}

            {isEditMode ? (
                <div className="flex flex-col gap-8 animate-in zoom-in-95 duration-200">
                    <input
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="bg-transparent text-white text-lg border-b border-white/10 focus:border-white/50 outline-none w-full pb-2 pl-1"
                        placeholder="your name..."
                        autoFocus
                    />
                    <input
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        className="bg-transparent text-white/60 text-sm border-b border-white/5 focus:border-white/30 outline-none w-full pb-2 pl-1"
                        placeholder="write a bio..."
                    />
                    <div className="flex gap-4 mt-2">
                        <button onClick={handleSave} className="flex items-center gap-1 text-[12px] text-green-400/80 hover:text-green-400 transition-colors uppercase tracking-widest font-bold">
                            <Check className="w-4 h-4" /> save
                        </button>
                        <button onClick={() => setMode(false)} className="flex items-center gap-1 text-[12px] text-white/25 hover:text-white transition-colors uppercase tracking-widest font-bold">
                            <X className="w-4 h-4" /> cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold text-white tracking-tight lowercase">
                        {userInfo?.name || "parsa"}
                    </h2>
                    <p className="text-sm text-white/40 font-light leading-relaxed max-w-[80%]">
                        {userInfo?.bio || "no bio yet. click edit to add one."}
                    </p>
                </div>
            )}
        </div>
    )
}
