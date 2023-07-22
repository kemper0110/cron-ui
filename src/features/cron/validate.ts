
export function validateInteger(number: number | undefined) {
    if (number === undefined)
        throw new Error("number is undefined")
    if (isNaN(number))
        throw new Error("number is NaN")
    if (number !== (number | 0))
        throw new Error("not integer number")
}

export function validateMinutes(minutes: number | undefined) {
    validateInteger(minutes)
    // check again only for typescript
    if (minutes === undefined)
        throw new Error("minutes are undefined")
    if (minutes < 0 || minutes >= 60)
        throw new Error("minutes must be >0 <60")
}

export function validateHours(hours: number | undefined) {
    validateInteger(hours)
    // check again only for typescript
    if (hours === undefined)
        throw new Error("minutes are undefined")
    if (hours < 0 || hours >= 24)
        throw new Error("hours must be >0 <24")
}