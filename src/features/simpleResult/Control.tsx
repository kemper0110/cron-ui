import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store.ts";
import {saveThunk} from "./SaveThunk.ts";
import {loadThunk} from "./LoadThunk.ts";

export const Control = () => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className={'py-10 flex gap-12 justify-center'}>
            <button className={'border border-solid shadow px-3.5 py-0.5'} onClick={() => dispatch(loadThunk())}>
                Load
            </button>
            <button className={'border border-solid shadow px-3.5 py-0.5'} onClick={() => dispatch(saveThunk())}>
                Save
            </button>
        </div>
    )
}
