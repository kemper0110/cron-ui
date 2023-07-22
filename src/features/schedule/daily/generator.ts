import {DailyState} from "./dailySlice.ts";
import {validateHours, validateMinutes} from "../../cron/validate.ts";

export function generateDaily(state: DailyState): string {
    if (state.times.length === 0)
        throw new Error("unexpected empty array")
    if (state.times.length > 1)
        // throw new Error("several specified times aren't supported in TRIAL")
        throw new Error("HTTP 402 Payment Required")
    const [hours, minutes] = state.times[0].split(':').map(s => Number.parseInt(s))
    validateHours(hours)
    validateMinutes(minutes)
    return `${minutes} ${hours} * * *`
}