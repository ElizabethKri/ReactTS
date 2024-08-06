export type AccordionType = {
    titleValue: string,
    collapsed: boolean
    onChange: (accordionCollapsed: boolean)  => void;

}

export function Accordion(props: AccordionType) {
    console.log("rendering Accordion")

    return (
        <>
            <AccordionTitle title={props.titleValue}  onChange ={props.onChange}/>
            {!props.collapsed  && <AccordionBody/>}
        </>
    )
}

export type AccordionTitleType = {
    title: string
    onClick?: () => void
    onChange: (accordionCollapsed: boolean)  => void;

}

const AccordionTitle = (props : AccordionTitleType) => {
    return <h3 onClick={() => props.onChange(false)}>---{props.title}---</h3>
}

const AccordionBody = () => {
    console.log("rendering AccordionBody")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

