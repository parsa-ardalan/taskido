"use client"

import InfoBox from "@/components/settings/InfoBox"
import Language from "@/components/settings/Language"
import Notifications from "@/components/settings/Notifications"
import Theme from "@/components/settings/Theme"

export default function SettingsPage() {

    return (

        <div className="page flex flex-col gap-5 max-w-4xl mx-auto">

            {/* Language */}
            <Language />

            {/* Notifications */}
            <Notifications />

            {/* Theme */}
            <Theme />

            {/* App Info */}
            <InfoBox />

        </div>
    )
} 