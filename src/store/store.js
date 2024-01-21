import { configureStore } from "@reduxjs/toolkit";
import { stgReducer } from "./reducer";

export const store=configureStore(
    {
        reducer:stgReducer
    }
)