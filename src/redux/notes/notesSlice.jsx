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
                id: state.length + 1,
                title: action.payload,
                checked: false,
                status: "active"
            };

            state.push(newNote)

        },

        edit: (state, action) => {

        },

        remove: (state, action) => {

        },

        restore: (state, action) => {

            const expiredNote = state.find(note => note.id == action.payload);
            expiredNote.status = "active"
        }
    },
});

export const { add, edit, remove, restore } = notesSlice.actions;
export default notesSlice.reducer;
