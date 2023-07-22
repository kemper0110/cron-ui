import {AppDispatch} from "../../store.ts";
import {scheduleActions} from "../schedule/ScheduleSlice.ts";
import {parseCron} from "../cron/parser.ts";
import {ScheduleType} from "../schedule/types.ts";
import {minutesActions} from "../schedule/minutes/minutesSlice.ts";
import {weeklyActions} from "../schedule/weekly/weeklySlice.ts";
import {dailyActions} from "../schedule/daily/dailySlice.ts";

export const onChangeThunk = (value: string) => (dispatch: AppDispatch) => {
    dispatch(scheduleActions.setResult(value))
    try {
        const result = parseCron(value)
        console.log("parsed", JSON.stringify(result))
        dispatch(scheduleActions.setError(undefined))
        if (result.type === undefined) {
            dispatch(scheduleActions.setType(undefined))
            return
        }
        dispatch(scheduleActions.setType(result.type))

        switch (result.type) {
            case ScheduleType.minutes:
                dispatch(minutesActions.setMinutes(result.minutePeriod))
                break;
            case ScheduleType.weekly:
                dispatch(weeklyActions.setTime(result.time))
                dispatch(weeklyActions.setDays(result.weekDays))
                break;
            case ScheduleType.daily:
                dispatch(dailyActions.setTimes([result.time]))
                break;
        }
    } catch (e) {
        console.log(JSON.stringify(e))
        if (e instanceof Error)
            dispatch(scheduleActions.setError(e.message))
        else
            dispatch(scheduleActions.setError("unexpected error"))
    }
}