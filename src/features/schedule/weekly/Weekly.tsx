import {Days} from "./Days.tsx";
import {Time} from "./Time.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store.ts";
import {ScheduleType} from "../types.ts";
import {scheduleActions} from "../ScheduleSlice.ts";
import {TypeBlock} from "../TypeBlock.tsx";

export const Weekly = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selected = useSelector((state: RootState) => state.schedule.type === ScheduleType.weekly)
    return (
        <TypeBlock selected={selected}
                   onSelect={() => dispatch(scheduleActions.setType(ScheduleType.weekly))} label={'Weekly'}>
            <div className={'py-3 flex flex-col gap-3'}>
                <Days/>
                <Time/>
            </div>
        </TypeBlock>
    );
};

