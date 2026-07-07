'use client'

import { useEffect, useState } from "react";
import Note from "./Note";
import { useSelector } from "react-redux";

export default function Notes() {

    const noteTitles = [
        "What's on your mind today?",
        "What magic are we shipping today?",
        "Coffee is ready, let's build.",
        "What are we cooking up?",
        "Brainstorming for greatness...",
        "Dreaming big, day by day",
        "Let's make something beautiful today.",
    ];

    const notesList = useSelector(state => state.notes);
    const sortedNotes = [...notesList].sort((a, b) => b.pinned - a.pinned)

    const activeNotesList = sortedNotes.filter(
        (note) => note.status === "active"
    );
    const [noteTitle, setNoteTitle] = useState("")

    useEffect(() => {

        const rand = Math.floor(Math.random() * noteTitles.length);

        setNoteTitle(noteTitles[rand])
    }, [])


    return (

        <div className="w-full h-auto">

            <h1 className="mt-10 mb-5 md:mb-6 text-base sm:text-lg md:text-xl">
                {noteTitle}
            </h1>

            {/* notes */}
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-3 sm:px-4 md:px-6">
                {activeNotesList.map((note) => <Note key={note.id} id={note.id} title={note.title} checked={note.checked} pinned={note.pinned} />)}
            </div>

        </div>
    );
}