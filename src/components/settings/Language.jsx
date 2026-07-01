import { Globe } from "lucide-react"

export default function Language() {

    return (
        <div className="shadow-sm shadow-white/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Globe size={20} />
                <span className="font-medium">Language</span>
            </div>

            <span className="text-sm text-zinc-400">
                English
            </span>
        </div>
    )
}