import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {useEffect} from "react";
import {ScheduleType} from "../schedule/types.ts";
import {generateMinutes} from "../schedule/minutes/generator.ts";
import {generateDaily} from "../schedule/daily/generator.ts";
import {generateWeekly} from "../schedule/weekly/generator.ts";
import {scheduleActions} from "../schedule/ScheduleSlice.ts";

// observes states to update state.schedule.result
// maybe somehow apply middleware
export const ChangesObserver = () => {
    const dispatch = useDispatch<AppDispatch>()
    const type = useSelector((state: RootState) => state.schedule.type)
    const minutes = useSelector((state: RootState) => state.minutes)
    const daily = useSelector((state: RootState) => state.daily)
    const weekly = useSelector((state: RootState) => state.weekly)

    useEffect(() => {
        console.log("generating")
        try {
            const result = (
                () => {
                    if (type === undefined) return ""
                    switch (type) {
                        case ScheduleType.minutes:
                            return generateMinutes(minutes)
                        case ScheduleType.daily:
                            return generateDaily(daily)
                        case ScheduleType.weekly:
                            return generateWeekly(weekly)
                        case ScheduleType.monthly:
                            return ""
                    }
                }
            )()
            dispatch(scheduleActions.setResult(result))
            dispatch(scheduleActions.setError(undefined))
        } catch (e) {
            console.log(JSON.stringify(e))
            if (e instanceof Error)
                dispatch(scheduleActions.setError(e.message))
            else
                dispatch(scheduleActions.setError("unexpected error"))
        }
    })
    return (
        <></>
    )
}