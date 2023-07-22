import {DailyResult, detectDaily} from "../schedule/daily/parser.ts";
import {detectMinutes, MinutesResult} from "../schedule/minutes/parser.ts";
import {detectWeekly, WeeklyResult} from "../schedule/weekly/parser.ts";

export type ParserResult = UndefinedResult | MinutesResult | WeeklyResult | DailyResult
type UndefinedResult = {
    type: undefined
}

`
    SAMPLES
    * * * * *
    */15 * * * *
    */125 * * * *
    0 12 * * *
    0 12 * * MON,TUE,THU,FRI
    0 12 * * MON
`
const validator = /^((\d*|\*|(\*\/\d*)) (\d*|\*|(\*\/\d*)) (\d*|\*|(\*\/\d*)) (\d*|\*|(\*\/\d*)) (.*))$/

export function parseCron(cron: string): ParserResult {
    if(!validator.test(cron))
        throw new Error("not valid cron string")

    const minutesResult = detectMinutes(cron)
    if (minutesResult)
        return minutesResult
    const dailyResult = detectDaily(cron)
    if (dailyResult)
        return dailyResult
    const weeklyResult = detectWeekly(cron)
    if (weeklyResult)
        return weeklyResult

    return {
        type: undefined
    } as UndefinedResult
}
