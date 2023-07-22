import {configureStore} from '@reduxjs/toolkit'
import {scheduleReducer} from "./features/schedule/ScheduleSlice.ts";
import {dailyReducer} from "./features/schedule/daily/dailySlice.ts";
import {minutesReducer} from "./features/schedule/minutes/minutesSlice.ts";
import {weeklyReducer} from "./features/schedule/weekly/weeklySlice.ts";

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        daily: dailyReducer,
        minutes: minutesReducer,
        weekly: weeklyReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch