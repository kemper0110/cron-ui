import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Time, timeInitialState} from "../types.ts";

export type DailyState = {
    times: Array<Time>
}

export const dailySlice = createSlice({
    name: "daily",
    initialState: {
        times: [timeInitialState]
    } as DailyState,
    reducers: {
        setTime: (state, action: PayloadAction<{ idx: number, value: Time }>) => {
            const {idx, value} = action.payload
            state.times[idx] = value
        },
        setTimes: (state, action: PayloadAction<Array<Time>>) => {
            state.times = action.payload
        },
        pushTime: (state) => {
            state.times.push(timeInitialState)
        },
        popTime: (state) => {
            if (state.times.length > 1)
                state.times.pop()
        },
    }
})

export const dailyReducer = dailySlice.reducer;
export const dailyActions = dailySlice.actions