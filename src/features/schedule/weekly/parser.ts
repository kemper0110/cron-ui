import {ScheduleType, Time, WeekDay} from "../types.ts";
import {mapCrondayToWeekday, padNumber2} from "../../cron/utils.ts";

export function detectWeekly(cron: string) {
    const parts = cron.split(' ')
    const [minutes_str, hours_str, daysMonth, month, daysWeek] = parts

    // `${minutes} ${hours} * * ${crondays}`
    const weekdays = (() => {
        if (daysWeek !== "*") {
            const crondays = daysWeek.split(',')
            const weekdays_unchecked = crondays.map(mapCrondayToWeekday)
            if (weekdays_unchecked.includes(undefined))
                throw new Error("unexpected weekday")
            return weekdays_unchecked as WeekDay[]
        } else {
            return [] as WeekDay[]
        }
    })()
    const minutes = Number.parseInt(minutes_str)
    const hours = Number.parseInt(hours_str)
    console.log(minutes, hours, daysMonth, month)
    if (!isNaN(minutes) && !isNaN(hours) && month === "*" && weekdays.length !== 0) {
        //  && daysMonth === "*" - debatable
        return {
            type: ScheduleType.weekly,
            weekDays: weekdays,
            time: `${padNumber2(hours)}:${padNumber2(minutes)}`
        } as WeeklyResult
    }
}


export type WeeklyResult = {
    type: ScheduleType.weekly
    weekDays: WeekDay[]
    time: Time
}
