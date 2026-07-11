import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "English",
    theme: "system",
    notification: false
};

const SettingsSlice = createSlice({

    name: "settings",

    initialState,

    reducers: {

        changeLanguage: (state, action) => {
            state.language = action.payload
        },

        toggleTheme: (state, action) => {
            state.theme = action.payload
        },

        toggleNotification: (state, action) => {
            state.notification = action.payload
        },

    }
});

export const {
    changeLanguage,
    toggleNotification,
    toggleTheme
} = SettingsSlice.actions

export default SettingsSlice.reducer
