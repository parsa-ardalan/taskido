import BackwardsButton from "@/components/backwards/BackwardsButton"
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

        <div className="page mx-auto w-full max-w-4xl">

            <BackwardsButton />

            <ProfileBox />

            <div className="w-full h-auto mt-6 sm:mt-8">
                {
                    tabs.map((tab) => (
                        <Link
                            className="w-full min-h-16 sm:min-h-18 md:min-h-20 flex items-center mt-3 sm:mt-4 md:mt-5 rounded-xl px-2 sm:px-3"
                            key={tab.id}
                            href={tab.url}
                        >
                            {/* icon */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex shrink-0 items-center justify-center">
                                <Image
                                    width={35}
                                    height={35}
                                    alt="icon"
                                    src={tab.icon}
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-[35px] md:h-[35px]"
                                />
                            </div>

                            {/* title */}
                            <div className="w-full h-full flex items-center justify-start pr-1 sm:pr-2">
                                <h1 className="text-base sm:text-lg md:text-xl text-white">
                                    {tab.title}
                                </h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}