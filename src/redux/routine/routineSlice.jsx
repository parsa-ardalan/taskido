import { createSlice } from "@reduxjs/toolkit";

const RoutineSlice = createSlice({
    name: "routine",

    initialState: {
        value: []
    },

    reducers: {

        add: (state, action) => {

            state.value.push({
                id: state.value.length,
                name: action.payload.name,
                time: action.payload.time,
                icon: action.payload.icon
            })
        },

        remove: (state, action) => {

        }
    }
});

export const { add, remove } = RoutineSlice.actions
export default RoutineSlice.reducer;