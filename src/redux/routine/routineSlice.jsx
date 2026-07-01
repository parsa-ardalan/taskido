import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const RoutineSlice = createSlice({
    name: "routine",

    initialState,

    reducers: {

        add: (state, action) => {
            state.push({
                id: nanoid(),
                name: action.payload.name,
                time: action.payload.time,
                icon: action.payload.icon
            })
        },

        edit: (state, action) => {
            const { id, name, time } = action.payload

            const routine = state.find(r => r.id === id)

            if (routine) {
                routine.name = name
                routine.time = time
            }
        },


        remove: (state, action) => {
            return state.filter(
                (routine) => routine.id !== action.payload
            );
        }

    }
});

export const { add, edit, remove } = RoutineSlice.actions
export default RoutineSlice.reducer;
