import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type MinutesState = {
    minutes: number | undefined
}

export const minutesSlice = createSlice({
    name: "minutes",
    initialState: {
        minutes: 15
    } as MinutesState,
    reducers: {
        setMinutes: (state, action: PayloadAction<number | undefined>) => {
            state.minutes = action.payload
        },
    }
})

export const minutesReducer = minutesSlice.reducer;
export const minutesActions = minutesSlice.actions