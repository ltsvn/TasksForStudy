import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    color?: string
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (<>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>

        {!props.collapsed && <AccordionBody/>}
    </>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<>
        <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>
    </>)
}

function AccordionBody() {
    return (<>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>)
}