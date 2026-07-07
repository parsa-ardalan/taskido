import { Globe } from "lucide-react"

export default function Language() {

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between transition-all duration-300">
            
            <div className="flex items-center gap-3 text-white">
                <Globe size={20} className="text-zinc-400" />
                <span className="font-medium text-sm sm:text-base">Language</span>
            </div>

            <span className="text-sm font-medium text-zinc-400">
                English
            </span>
            
        </div>
    )
}
