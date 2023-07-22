import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store.ts";
import {weeklyActions} from "./weeklySlice.ts";

export const Time = () => {
    const dispatch = useDispatch<AppDispatch>()
    const time = useSelector((state: RootState) => state.weekly.time)
    return (
        <label>
            Time
            <input type={'time'} className={'ms-3'} value={time}
                   onChange={e => dispatch(weeklyActions.setTime(e.target.value))}/>
        </label>
    )
}