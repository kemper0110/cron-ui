import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ScheduleType} from "./types.ts";

type ScheduleState = {
    type: ScheduleType | undefined
    result: string
    error: string | undefined
}

export const scheduleSlice = createSlice({
    name: "schedule",
    initialState: {
        type: undefined,
        result: "",
        error: undefined
    } as ScheduleState,
    reducers: {
        setType: (state, action: PayloadAction<ScheduleType | undefined>) => {
            state.type = action.payload
        },
        setResult: (state, action: PayloadAction<string>) => {
            state.result = action.payload
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload
        }
    }
})



export const scheduleReducer = scheduleSlice.reducer
export const scheduleActions = scheduleSlice.actions