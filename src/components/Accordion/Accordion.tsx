type AccordionType = {
    titleValue: string,
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    console.log("rendering Accordion")

    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed  && <AccordionBody/>}
        </>
    )
}

type AccordionTitleType = {
    title: string
}

const AccordionTitle = (props : AccordionTitleType) => {
    return <h3>---{props.title}---</h3>
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

