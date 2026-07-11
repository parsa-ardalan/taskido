import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notesSlice = createSlice({
    name: "notes",
    initialState,

    reducers: {

        add: (state, action) => {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                checked: false,
                status: "active",
                pinned: false,
                createdAt: Date.now()
            });
        },

        edit: (state, action) => {
            const note = state.find(n => n.id === action.payload.id);
            if (note) {
                note.title = action.payload.title;
            }
        },

        remove: (state, action) => {
            return state.filter(n => n.id !== action.payload);
        },

        check: (state, action) => {
            const note = state.find(n => n.id === action.payload);
            if (note) {
                note.checked = !note.checked;
            }
        },

        pin: (state, action) => {
            const note = state.find(n => n.id === action.payload);
            if (note) {
                note.pinned = !note.pinned;
            }
        },

        restore: (state, action) => {
            const note = state.find(n => n.id == action.payload);
            if (note) {
                note.status = "active";
            }
        },

        resetTasks: (state, action) => {

            const now = Date.now();
            const oneDay = action.payload;

            return state
                .filter(note => {
                    const isExpiredFromCreate = now - note.createdAt >= oneDay;

                    // remove checked tasks
                    if (isExpiredFromCreate && note.checked) {
                        return false;
                    }

                    // remove if it's 24 hours expired
                    if (
                        note.status === "expired" &&
                        note.expiredAt &&
                        now - note.expiredAt >= oneDay
                    ) {
                        return false;
                    }

                    return true;
                })
                .map(note => {
                    const isExpiredFromCreate = now - note.createdAt >= oneDay;

                    // expire task
                    if (isExpiredFromCreate && !note.checked && note.status !== "expired") {
                        return {
                            ...note,
                            status: "expired",
                            expiredAt: now
                        };
                    }

                    return note;
                });
        }

    },
});

export const {
    add,
    edit,
    remove,
    check,
    pin,
    restore,
    resetTasks
} = notesSlice.actions;

export default notesSlice.reducer;