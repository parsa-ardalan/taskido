"use client"

import InfoBox from "@/components/settings/InfoBox"
import Language from "@/components/settings/Language"
import Notifications from "@/components/settings/Notifications"
import Theme from "@/components/settings/Theme"

export default function SettingsPage() {

    return (
        <div className="page grid grid-cols-1 gap-5">

            {/* Language */}
            <Language />

            {/* Theme */}
            <Theme />

            {/* Notifications */}
            <Notifications />

            {/* App Info */}
            <InfoBox />

        </div>
    )
}
