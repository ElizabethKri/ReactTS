import {ChangeEvent, useRef, useState} from 'react';


export default  {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <>
        <input value={value} onChange={onChange}/> - {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        // const el = document.getElementById('inputId') as HTMLInputElement
        // setValue(el.value)

        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <>
        <input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> - actual value: {value}
    </>
}
export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>

