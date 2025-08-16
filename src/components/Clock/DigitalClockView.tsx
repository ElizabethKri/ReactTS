import React from "react";
import {ClockViewPropsType, get2digistsString} from "./Clock";

export const DigitalClockView : React.FC<ClockViewPropsType> = ({date}) => {
    return  <>
        <span>{get2digistsString (date.getHours ())}</span>
        :
        <span>{get2digistsString(date.getMinutes())}</span>
        :
        <span>{get2digistsString (date.getSeconds ())}</span>
    </>
}