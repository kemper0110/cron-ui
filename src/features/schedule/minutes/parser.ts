import {ScheduleType} from "../types.ts";

export function detectMinutes(cron: string) {
    const parts = cron.split(' ')
    const [minutes_str, _hours_str, daysMonth, month, daysWeek] = parts
    const [minutes, period] = minutes_str.split('/')
    if (!minutes)
        throw new Error("minutes expected")
    if (minutes === "*" && period && daysMonth === "*" && month === "*" && daysWeek === "*") {
        const periodInt = Number.parseInt(period)
        if (isNaN(periodInt))
            throw new Error("period is NaN")
        return {
            type: ScheduleType.minutes,
            minutePeriod: periodInt,
        } as MinutesResult
    }
}


export type MinutesResult = {
    type: ScheduleType.minutes
    minutePeriod: number
}