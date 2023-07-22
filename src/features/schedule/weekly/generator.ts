// Friday and sunday at 12:30 => 30 12 * * FRI,SUN
import {WeeklyState} from "./weeklySlice.ts";
import {validateHours, validateMinutes} from "../../cron/validate.ts";
import {WeekDay} from "../types.ts";


type CronDay = string
function mapWeekdayToCronday(weekday: WeekDay) : CronDay {
    return weekday.toUpperCase().slice(0, 3)
}

export function generateWeekly(state: WeeklyState): string {
    const [hours, minutes] = state.time.split(':').map(s => Number.parseInt(s))
    validateHours(hours)
    validateMinutes(minutes)
    const crondays = state.days.map(day => mapWeekdayToCronday(day)).join(',')
    return `${minutes} ${hours} * * ${crondays || '*'}`
}