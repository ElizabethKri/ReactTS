import {Accordion, AccordionTitleType, AccordionType} from './Accordion';
import {useReducer, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {reducer, TOGGLE_CONSTANT} from './reducer';

type actionType = {
    type: string
}

// const TOGGLE_CONSTANT = 'TOGGLE - COLLAPSED'
//
// const reducer = (state: boolean, action: actionType) => {
//     switch (action.type){
//         case TOGGLE_CONSTANT: return !state
//         default:
//             throw new Error('Bad action type')
//     }
//     // if (action.type === TOGGLE_CONSTANT){
//     //     return !state
//     // }
//     // return state
// }

export function UncontrolAcc(props: AccordionType) {
    console.log ('rendering Accordion')

    //let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed : false});

    // const onClickHandler = () => {
    //     setCollapsed(!collapsed)
    // }

    return (
        <>
            {/*<AccordionTitle title={props.titleValue} onClick = {onClickHandler}/>*/}
            <AccordionTitle title={props.titleValue} onClick = {() => dispatch({type: TOGGLE_CONSTANT})} onChange={() => {}}/>
            {/*<button onClick={onClickHandler}>Toggle</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </>
    )
}


const AccordionTitle = (props: AccordionTitleType) => {
    return <h3 onClick={props.onClick}>---{props.title}---</h3>
}

const AccordionBody = () => {
    console.log ('rendering AccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}