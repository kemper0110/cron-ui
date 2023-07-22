import {TypeBlock} from "./TypeBlock.tsx";
import {Daily} from "./daily/Daily.tsx";
import {Minutes} from "./minutes/Minutes.tsx";
import {Weekly} from "./weekly/Weekly.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {scheduleActions} from "./ScheduleSlice.ts";

export const Schedule = () => {
    return (
        <fieldset className={'min-w-[300px] border py-3 px-5 flex flex-col items-start'}>
            <legend className={'text-left px-2'}>Schedule</legend>
            <Undefined/>
            <Minutes/>
            <Daily/>
            <Weekly/>
        </fieldset>
    );
};

const Undefined = () => {
    const type = useSelector((state: RootState) => state.schedule.type)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <TypeBlock selected={type === undefined} onSelect={() => dispatch(scheduleActions.setType(undefined))}
                   label={'Custom'}>
            -- can't be parsed or generated
        </TypeBlock>
    )
}


