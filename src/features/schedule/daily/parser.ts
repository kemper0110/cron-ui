import {ScheduleType, Time} from "../types.ts";

import {padNumber2} from "../../cron/utils.ts";

export function detectDaily(cron: string) {
    const parts = cron.split(' ')
    const [minutes_str, hours_str, daysMonth, month, daysWeek] = parts
    const minutes = Number.parseInt(minutes_str)
    const hours = Number.parseInt(hours_str)
    console.log(parts)
    if (!isNaN(minutes) && !isNaN(hours) && daysMonth === "*" && month === "*" && daysWeek === "*") {
        return {
            type: ScheduleType.daily,
            time: `${padNumber2(hours)}:${padNumber2(minutes)}`
        } as DailyResult
    }
}

export type DailyResult = {
    type: ScheduleType.daily
    time: Time
}