export enum ScheduleType {
    minutes = "minutes",
    daily = "daily",
    weekly = "weekly",
    monthly = "monthly"
}

export enum WeekDay {
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
    sunday = "sunday"
}

export type Time = string
export const timeInitialState = "12:00"