import {WeekDay} from "../schedule/types.ts";

export function mapCrondayToWeekday(cronday: string) {
    return {
        "MON": WeekDay.monday,
        "TUE": WeekDay.tuesday,
        "WED": WeekDay.wednesday,
        "THU": WeekDay.thursday,
        "FRI": WeekDay.friday,
        "SAT": WeekDay.saturday,
        "SUN": WeekDay.sunday
    }[cronday] as WeekDay | undefined
}

export function padNumber2(value: number) {
    return ('00' + value).slice(-2)
}