import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Time, timeInitialState, WeekDay} from "../types.ts";

export type WeeklyState = {
    days: Array<WeekDay>
    time: Time
}

export const weeklySlice = createSlice({
    name: "weekly",
    initialState: {
        days: [],
        time: timeInitialState
    } as WeeklyState,
    reducers: {
        setDays: (state, action: PayloadAction<WeekDay[]>) => {
            state.days = action.payload
        },
        setTime: (state, action: PayloadAction<Time>) => {
            state.time = action.payload
        }
    }
})

export const weeklyReducer = weeklySlice.reducer
export const weeklyActions = weeklySlice.actions