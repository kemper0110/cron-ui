import './App.css'
import {Schedule} from "./features/schedule/Schedule.tsx";
import {CoolResult} from "./features/coolResult/CoolResult.tsx";
import SimpleResult from "./features/simpleResult/SimpleResult.tsx";
import {useState} from "react";
import {ChangesObserver} from "./features/coolResult/ChangesObserver.tsx";


function App() {
    return (
        <div className={'text-2xl'}>
            <Schedule/>
            <ResultSelector/>
        </div>
    )
}

function ResultSelector() {
    const [checked, setChecked] = useState(false)
    return (
        <div className={'flex flex-col gap-2'}>
            <label>
                <input type={'checkbox'} checked={checked} onChange={e => setChecked(e.target.checked)}/>
                <span className={'ml-3'}>interactive mode(beta)</span>
            </label>
            {
                checked ? (
                    <>
                        <CoolResult/>
                        <ChangesObserver/>
                    </>
                ) : (
                    <SimpleResult/>
                )
            }
        </div>
    )
}

export default App
