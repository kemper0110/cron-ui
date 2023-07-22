import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store.ts";
import {minutesActions} from "./minutesSlice.ts";
import {TypeBlock} from "../TypeBlock.tsx";
import {ScheduleType} from "../types.ts";
import {scheduleActions} from "../ScheduleSlice.ts";

export const Minutes = () => {
    const dispatch = useDispatch<AppDispatch>()
    const minutes = useSelector((state: RootState) => state.minutes.minutes)
    const selected = useSelector((state: RootState) => state.schedule.type === ScheduleType.minutes)
    return (
        <TypeBlock selected={selected}
                   onSelect={() => dispatch(scheduleActions.setType(ScheduleType.minutes))}
                   label={'Each X minutes'}>
            <div>
                <input type={'number'} value={minutes ?? ""} min={1} step={1}
                       onChange={e => {
                           const minutes = Number.parseInt(e.target.value) || undefined
                           dispatch(minutesActions.setMinutes(minutes))
                       }}/>
            </div>
        </TypeBlock>
    );
};