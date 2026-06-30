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

            <div className="w-full h-36 border-b mt-5"> </div>

            <div className="w-auto h-auto">
                {

                    tabs.map((tab) => (
                        <Link className="w-full h-20 rounded-md flex mt-5" key={tab.id} href={tab.url}>

                            {/* icon */}
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image width={45} height={45} alt="icon" src={tab.icon} />
                            </div>

                            {/* title */}
                            <div className="w-auto h-full flex items-center justify-start px-3">
                                <h1 className="text-lg text-white"> {tab.title} </h1>
                            </div>

                        </Link>
                    ))

                }
            </div>

        </div>
    )
}