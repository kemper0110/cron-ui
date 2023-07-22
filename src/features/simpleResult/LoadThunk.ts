import {AppDispatch, store} from "../../store.ts";
import {parseCron} from "../cron/parser.ts";
import {scheduleActions} from "../schedule/ScheduleSlice.ts";
import {ScheduleType} from "../schedule/types.ts";
import {minutesActions} from "../schedule/minutes/minutesSlice.ts";
import {weeklyActions} from "../schedule/weekly/weeklySlice.ts";
import {dailyActions} from "../schedule/daily/dailySlice.ts";

export const loadThunk = () => (dispatch: AppDispatch, getState: typeof store.getState) => {
    // parse cron, dispatch data to stores
    const result = getState().schedule.result
    try {
        const parseResult = parseCron(result)
        if (parseResult.type === undefined) {
            dispatch(scheduleActions.setType(undefined))
            return
        }
        dispatch(scheduleActions.setError(undefined))
        dispatch(scheduleActions.setType(parseResult.type))
        console.log(JSON.stringify(parseResult))
        switch (parseResult.type) {
            case ScheduleType.minutes:
                dispatch(minutesActions.setMinutes(parseResult.minutePeriod))
                break;
            case ScheduleType.weekly:
                dispatch(weeklyActions.setTime(parseResult.time))
                dispatch(weeklyActions.setDays(parseResult.weekDays))
                break;
            case ScheduleType.daily:
                dispatch(dailyActions.setTimes([parseResult.time]))
                break;
        }
    } catch (e) {
        if (e instanceof Error)
            dispatch(scheduleActions.setError(e.message))
        else
            dispatch(scheduleActions.setError("unexpected error"))
        console.log(JSON.stringify(e))
    }
}