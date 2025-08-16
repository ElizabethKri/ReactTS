import React, {useState} from 'react';

export type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}



export const OnOff = ({on, onChange}: PropsType) => {



    // let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height:  "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height:  "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicationStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green": "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => onChange(true)} >On</div>
            <div style={offStyle}  onClick={() =>onChange(false)}>Off</div>
            <div style={indicationStyle}></div>
        </div>
    );
};

