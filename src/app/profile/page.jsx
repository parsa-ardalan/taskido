import ProfileBox from "@/components/profile/ProfileBox"
import Image from "next/image"
import Link from "next/link"

export default function Profile() {

    const tabs = [
        {
            id: 0,
            title: "expired tasks",
            url: "/expired",
            icon: "/icons/delayed.png"
        },
        {
            id: 1,
            title: "daily routine",
            url: "/routine",
            icon: "/icons/daily.png"
        },
        {
            id: 2,
            title: "settings",
            url: "/settings",
            icon: "/icons/settings.png"
        }
    ]

    return (

        <div className="page">

            <ProfileBox />

            <div className="w-auto h-auto">
                {

                    tabs.map((tab) => (
                        <Link className="w-full h-20 flex mt-5" key={tab.id} href={tab.url}>

                            {/* icon */}
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image width={35} height={35} alt="icon" src={tab.icon} />
                            </div>

                            {/* title */}
                            <div className="w-auto h-full flex items-center justify-start">
                                <h1 className="text-lg text-white"> {tab.title} </h1>
                            </div>

                        </Link>
                    ))

                }
            </div>

        </div>
    )
}