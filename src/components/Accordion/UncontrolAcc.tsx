import {Accordion, AccordionTitleType, AccordionType} from './Accordion';
import {useState} from 'react';




export function UncontrolAcc(props: AccordionType) {
    console.log ('rendering Accordion')

    let [collapsed, setCollapsed] = useState(false);

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            {/*<AccordionTitle title={props.titleValue} onClick = {onClickHandler}/>*/}
            {/*<button onClick={onClickHandler}>Toggle</button>*/}
            {!collapsed && <AccordionBody/>}
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