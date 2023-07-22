import {ReactNode, useId} from "react";

export const TypeBlock = ({selected, onSelect, children: conditionalChildren, label}: {
    selected: boolean,
    onSelect: () => void,
    label: string,
    children?: ReactNode | ReactNode[]
}) => {
    const id = useId();
    return (
        <div className={'flex flex-col items-start'}>
            <div>
                <input type={'radio'} className={''} id={id} checked={selected} onChange={onSelect}/>
                <label htmlFor={id} className={'pl-3'}>{label}</label>
            </div>
            <div className={'pl-6'}>
                {selected ? conditionalChildren : null}
            </div>
        </div>
    )
}