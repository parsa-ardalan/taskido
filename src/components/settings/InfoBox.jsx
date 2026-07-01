import { Info } from "lucide-react"


export default function InfoBox() {

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-3">
                <Info size={20} />
                <span className="font-medium">App Info</span>
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