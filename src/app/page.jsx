'use client'

import Header from "@/components/header/Header";
import Notes from "@/components/notes/Notes";
import NoteModal from "@/components/notes/modals/NoteModal";

import { useState } from "react";

export default function Home() {

  // add new note
  const [isModalOpen, modalStatus] = useState(false);

  // functions
  const openModal = () => {
    modalStatus(true)
  }

  return (

    <>

      {
        !isModalOpen ? (
          <div className="hidden"> </div>
        ) : (
          <div>
            <NoteModal modalStatus={modalStatus} />
          </div>
        )
      }

      <main className="page">

        <Header />
        <Notes />

        <div className="w-full h-fit px-3 mt-10 flex items-center justify-center" dir="rtl">
          <button className="size-12 shadow-xs shadow-green-500/50 rounded-full flex items-center justify-center" onClick={openModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </main>

    </>

  );
}
