import {ScheduleType, Time} from "../types.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store.ts";
import {dailyActions} from "./dailySlice.ts";
import {TypeBlock} from "../TypeBlock.tsx";
import {scheduleActions} from "../ScheduleSlice.ts";

const DailyBlock = ({value, onChange}: { value: Time, onChange: (value: Time) => void }) => {
    return (
        <div className={'flex items-center gap-6'}>
            <span>At time</span>
            <input type={'time'} value={value}
                   onChange={e => {
                       onChange(e.target.value)
                       console.log(e.target.value)
                   }}/>
        </div>
    )
}

export const Daily = () => {
    const dispatch = useDispatch<AppDispatch>()
    const time = useSelector((state: RootState) => state.daily.times)
    const selected = useSelector((state: RootState) => state.schedule.type === ScheduleType.daily)
    return (
        <TypeBlock selected={selected}
                   onSelect={() => dispatch(scheduleActions.setType(ScheduleType.daily))} label={'Daily'}>
            <div className={'flex flex-col gap-y-3'}>
                {
                    time.map(
                        // it's ok to use position of element here: append/delete from end
                        (value, idx) => (
                            <DailyBlock key={idx} value={value}
                                        onChange={value => {
                                            dispatch(dailyActions.setTime({idx, value}))
                                            // setTimeForIdx(value, idx)
                                        }}
                            />
                        )
                    )
                }
                <div className={'flex w-full'}>
                    <button onClick={() => dispatch(dailyActions.pushTime())}
                            className={'bg-blue-900 py-0.5 w-1/2 flex-auto border-t border-l border-b border-slate-400 border-solid'}
                    >
                        +
                    </button>
                    <button
                        onClick={() => dispatch(dailyActions.popTime())}
                        className={'bg-pink-900 py-0.5 w-1/2 flex-auto border-t border-r border-b border-slate-400 border-solid'}
                    >
                        -
                    </button>
                </div>
            </div>
        </TypeBlock>
    )
}