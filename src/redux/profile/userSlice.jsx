import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "user",
    bio: "write a line bio...",
    isPremium: false
};

const UserSlice = createSlice({

    name: "user",

    initialState,

    reducers: {

        editName: (state, action) => {
            state.name = action.payload;
        },

        editBio: (state, action) => {
            state.bio = action.payload;
        }
    }
});

export const { editName, editBio } = UserSlice.actions;
export default UserSlice.reducer;
