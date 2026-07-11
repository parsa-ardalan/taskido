"use client";

import { resetTasks } from "@/redux/notes/notesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ONE_DAY = 24 * 60 * 60 * 1000;

export default function AppInitializer({ children }) {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(resetTasks());

        const interval = setInterval(() => {
            dispatch(resetTasks(ONE_DAY));
        }, ONE_DAY);

        return () => clearInterval(interval);
    }, [dispatch]);

    return children;
}