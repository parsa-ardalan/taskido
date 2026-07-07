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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <NoteModal modalStatus={modalStatus} />
        </div>
      )}

      {/* 
        max-w-7xl و mx-auto باعث میشه در دسکتاپ محتوا بیش از حد عریض نشه.
        w-full و min-h-screen هم پوشش کامل دستگاه‌ها رو تضمین می‌کنه.
      */}
      <main className="page mx-auto max-w-7xl w-full min-h-screen flex flex-col justify-between pb-24 md:pb-8">

        <div className="w-full">
          <Header />
          <Notes />
        </div>

        <div
          className="fixed bottom-6 right-6 md:relative md:bottom-auto md:right-auto w-auto rounded-full md:w-full h-fit mt-10 flex items-center justify-center z-40 backdrop-blur-xs"
          dir="rtl"
        >
          <button
            className="size-12 shadow-xs shadow-green-500 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none"
            onClick={openModal}
            aria-label="Add new note"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}
