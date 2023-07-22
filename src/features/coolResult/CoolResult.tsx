import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store.ts";
import {onChangeThunk} from "./OnChangeThunk.ts";

/*
    1) dispatch from constructor
        generate result from state
    2) dispatch from input onChange
        parse result, set data to schedule
*/

export const CoolResult = () => {
    const dispatch = useDispatch<AppDispatch>()
    const result = useSelector((state: RootState) => state.schedule.result)
    const error = useSelector((state: RootState) => state.schedule.error)
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        dispatch(onChangeThunk(value))
    }
    return (
        <div className={'flex flex-col gap-3'}>
            <input value={result ?? ""} onChange={onInputChange}/>
            {
                error ? (
                    <span>{error}</span>
                ) : null
            }
        </div>
    )
}

