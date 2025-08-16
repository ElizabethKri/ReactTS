import React, {useCallback, useMemo} from 'react';


export type AccordionType = {
    titleValue: string,
    collapsed: boolean
    onChange: (accordionCollapsed: boolean)  => void;
    items: ItemType[]
    onClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}



export function Accordion(props: AccordionType) {
    console.log("rendering Accordion")



    return (
        <>
            <AccordionTitle title={props.titleValue}  onChange ={props.onChange}/>
            {!props.collapsed  && <AccordionBody items = {props.items} onClick={props.onClick} value={props.titleValue}/>}
        </>
    )
}

export type AccordionTitleType = {
    title: string
    onClick?: () => void
    onChange: (accordionCollapsed: boolean)  => void;

}

const AccordionTitle = (props : AccordionTitleType) => {
    console.log('Accordion Title')
    return <h3 onClick={(event) => props.onChange(false)}>---{props.title}---</h3>
}

export type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void,
    value: any
}



const AccordionBody = React.memo(({items, onClick, value} : AccordionBodyType) => {
    console.log("rendering AccordionBody")

    const newItems = useMemo(() => {
        return items.map((i, index) =>
            <li onClick={i.value} key={index}>{i.title}</li>)
    }, [items])


    return (
        <ul>
            {newItems}
        </ul>
    )
})

//const AccBodyMemo = React.memo(AccordionBody)

