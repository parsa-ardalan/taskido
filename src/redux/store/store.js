import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
    persistStore,
    persistReducer,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

// slices
import notesSlice from "@/redux/notes/notesSlice"
import routineSlice from '../routine/routineSlice'

const rootReducer = combineReducers({
    notes: notesSlice,
    routine: routineSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['notes', 'routine'],
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