import { Info } from "lucide-react"

export default function InfoBox() {

    return (
        <div className="border border-zinc-800 backdrop-blur-sm shadow-sm shadow-white/50 rounded-2xl p-4 sm:p-5 space-y-3 transition-all duration-300">
            
            <div className="flex items-center gap-3 text-white">
                <Info size={20} className="text-zinc-400" />
                <span className="font-semibold text-sm sm:text-base">App Info</span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
                Taskido is a daily activity management and lifestyle app designed
                for seamless organization and control. It provides a clean interface
                for managing notes, routines, and daily activities while maintaining
                an easy use experience.
            </p>
            
        </div>
    )
}