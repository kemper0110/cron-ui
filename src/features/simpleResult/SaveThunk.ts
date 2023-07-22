import {AppDispatch, store} from "../../store.ts";
import {ScheduleType} from "../schedule/types.ts";
import {scheduleActions} from "../schedule/ScheduleSlice.ts";
import {generateDaily} from "../schedule/daily/generator.ts";
import {generateWeekly} from "../schedule/weekly/generator.ts";
import {generateMinutes} from "../schedule/minutes/generator.ts";

export const saveThunk = () => (dispatch: AppDispatch, getState: typeof store.getState) => {
    const type = getState().schedule.type
    try {
        const generated = (() => {
            if (!type) return ""
            switch (type) {
                case ScheduleType.minutes:
                    return generateMinutes(getState().minutes)
                case ScheduleType.daily:
                    return generateDaily(getState().daily)
                case ScheduleType.weekly:
                    return generateWeekly(getState().weekly)
                case ScheduleType.monthly:
                    return ""
            }
        })()
        dispatch(scheduleActions.setResult(generated))
        dispatch(scheduleActions.setError(undefined))
    } catch (e) {
        if (e instanceof Error)
            dispatch(scheduleActions.setError(e.message))
        else
            dispatch(scheduleActions.setError("unexpected error"))
        console.log(JSON.stringify(e))
    }
}