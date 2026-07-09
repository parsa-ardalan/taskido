'use client'

import { useRouter } from "next/navigation"

export default function BackwardsButton() {

    const router = useRouter()

    return (
        <div className="w-full h-14 flex items-center justify-start">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 opacity-50" onClick={() => { router.back() }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

        </div>
    )
}