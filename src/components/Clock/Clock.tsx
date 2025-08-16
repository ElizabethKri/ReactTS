import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const get2digistsString = (number: number) => number < 10 ? '0' + number : number

const Clock: React.FC<PropsType> = ({mode}) => {

    const [date, setDate] = useState (new Date ())

    useEffect (() => {
        const intervalID = setInterval (() => {
            setDate (new Date())
        }, 1000);

        return () => {
            clearInterval (intervalID)
        }

    }, []);


    //const secondString = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    let view

    switch (mode){
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>
            {view}
        </div>
    );
};

export default Clock;

export type ClockViewPropsType = {
    date: Date
}




