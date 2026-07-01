import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "En",
    theme: "dark",
    notification: false
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,

    reducers: {

        changeLanguage: (state, action) => {
            state.language = action.payload
        },

        changeTheme: (state, action) => {
            state.theme = action.payload
            console.log(state.theme)
        },

        toggleNotification: (state) => {
            state.notification = !state.notification
        }

    }
});

export const {
    changeLanguage,
    changeTheme,
    toggleNotification
} = settingsSlice.actions

export default settingsSlice.reducer