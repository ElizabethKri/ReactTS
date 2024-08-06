import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    onChangeOn: (on: boolean) => void
}



export const UnControlledOnOff = ({onChangeOn}: PropsType) => {



    let [on, setOn] = useState(false)

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

    const onClicked = () => {
        setOn(true)
        onChangeOn(true)
    }

    const offClicked = () => () => {
        setOn (false)
        onChangeOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}  >On</div>
            <div style={offStyle} onClick={offClicked} >Off</div>
            <div style={indicationStyle}></div>
        </div>
    );
};

