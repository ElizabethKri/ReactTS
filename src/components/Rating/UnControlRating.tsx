import {useState} from 'react';
import {RatingValueType} from './Rating';

type RatingProps = {
    defaultValue?: RatingValueType,
    onChange: (value: RatingValueType) => void
}

export function UnControlRating(props: RatingProps) {
    console.log("rendering Rating")

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);



    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue (1); props.onChange(1)}} />
            {/*<button onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 1} setValue={() => {setValue (2); props.onChange(2)}}/>
            {/*<button onClick={() => setValue(2)}>2</button>*/}
            <Star selected={value > 2} setValue={() => {setValue (3); props.onChange(3)}}/>
            {/*<button onClick={() => setValue(3)}>3</button>*/}
            <Star selected={value > 3} setValue={() => {setValue (4); props.onChange(4)}} />
            {/*<button onClick={() => setValue(4)}>4</button>*/}
            <Star selected={value > 4} setValue={() => {setValue (5); props.onChange(5)}}/>
            {/*<button onClick={() => setValue(5)}>5</button>*/}
        </div>
    )

}

type StarProps = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StarProps) => {
    console.log("rendering Rating")
    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return <span onClick={() => props.setValue()}>{props.selected ? <b> star </b> : "star"}</span>
}
