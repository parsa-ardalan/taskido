'use client'

import Image from "next/image";
import Link from "next/link";

export default function Header() {


    const date = new Date()

    const weekday = date.toLocaleDateString("en-US", {
        weekday: "long"
    })


    return (

        <header className='w-full h-auto'>

            <div className="w-full h-16 flex px-5 shadow-sm shadow-white/50 rounded-2xl">

                <Link href={"./profile"} className="w-1/3 h-full flex items-center justify-start">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </Link>

                <div className="w-2/3 h-full flex items-center justify-end">
                    <Image width={35} height={35} src={"/logo.png"} alt="taskido" />
                </div>


            </div>


            <div className="w-full h-auto shadow-sm shadow-white/50 rounded-2xl my-5 p-5">

                <h1 className='text-3xl text-white'>{weekday}</h1>

                <p className='text-sm text-white mt-5'>
                    {date.toLocaleDateString()}
                </p>

            </div>

        </header>
    )
}
