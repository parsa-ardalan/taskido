import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const notesSlice = createSlice({
    name: "notes",

    // tips:
    // checked: task is done or not
    // status: either active or expired

    initialState,

    reducers: {

        add: (state, action) => {

            const newNote = {
                id: action.payload.id,
                title: action.payload.title,
                checked: false,
                status: "active",
                pinned: false
            };

            state.push(newNote)
        },


        edit: (state, action) => {

            const note = state.find(note => note.id === action.payload.id);

            if (note) {
                note.title = action.payload.title;
            }

        },


        remove: (state, action) => {
            return state.filter(note => note.id !== action.payload);
        },

        check: (state, action) => {
            const id = action.payload;
            const note = state.find(note => note.id === id);

            if (!note) return;

            note.checked = !note.checked;
        },


        pin: (state, action) => {

            const note = state.find(note => note.id === action.payload)

            if (note) {
                note.pinned = !note.pinned
            }

        },


        restore: (state, action) => {
            const expiredNote = state.find(note => note.id == action.payload);
            expiredNote.status = "active"
        }
    },
});

export const { add, edit, remove, check, pin, restore } = notesSlice.actions;
export default notesSlice.reducer;
