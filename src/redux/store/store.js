import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
    persistStore,
    persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

// slices
import notesSlice from "@/redux/notes/notesSlice"
import routineSlice from "@/redux/routine/routineSlice"
import settingsSlice from "@/redux/settings/settingsSlice"
import userSlice from "@/redux/profile/userSlice"

const rootReducer = combineReducers({
    notes: notesSlice,
    routine: routineSlice,
    settings: settingsSlice,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['notes', 'routine', 'settings', 'user'],
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)