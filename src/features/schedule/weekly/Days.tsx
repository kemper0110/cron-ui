import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store.ts";
import React from "react";
import {WeekDay} from "../types.ts";
import {weeklyActions} from "./weeklySlice.ts";

export const Days = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selectedDays = useSelector((state: RootState) => state.weekly.days)
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedDays = Array.from(e.target.options).reduce((prev, cur) => {
            if (cur.selected) prev.push(cur.value as WeekDay)
            return prev
        }, [] as WeekDay[])
        dispatch(weeklyActions.setDays(newSelectedDays))
    }
    return (
        <select multiple={true} onChange={onChange}
                value={selectedDays}
        >
            <option value={WeekDay.monday}>Monday</option>
            <option value={WeekDay.tuesday}>Tuesday</option>
            <option value={WeekDay.wednesday}>Wednesday</option>
            <option value={WeekDay.thursday}>Thursday</option>
            <option value={WeekDay.friday}>Friday</option>
            <option value={WeekDay.saturday}>Saturday</option>
            <option value={WeekDay.sunday}>Sunday</option>
        </select>
    )
}