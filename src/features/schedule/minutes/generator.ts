import {MinutesState} from "./minutesSlice.ts";
import {validateInteger} from "../../cron/validate.ts";

// every 5 minutes => */5 * * * *
export function generateMinutes(state: MinutesState): string {
    // every minute is unconstrained in [0, 60)
    validateInteger(state.minutes)
    return `*/${state.minutes} * * * *`
}