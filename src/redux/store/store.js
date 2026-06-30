import { configureStore } from '@reduxjs/toolkit'

// slices
import notesSlice from "@/redux/notes/notesSlice"
import routineSlice from '../routine/routineSlice'

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        routine: routineSlice
    },
})
