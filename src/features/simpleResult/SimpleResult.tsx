import {Control} from "./Control.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {scheduleActions} from "../schedule/ScheduleSlice.ts";

const SimpleResult = () => {
    const dispatch = useDispatch<AppDispatch>()
    const result = useSelector((state: RootState) => state.schedule.result)
    const error = useSelector((state: RootState) => state.schedule.error)
    return (
        <div>
            <Control/>
            <div className={'flex flex-col gap-3'}>
                <input value={result} onChange={e => {
                    dispatch(scheduleActions.setResult(e.target.value))
                }}/>
                {
                    error ? (
                        <span>
                        {error}
                    </span>
                    ) : null
                }
            </div>
        </div>
    );
};

export default SimpleResult;
