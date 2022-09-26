import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    color?: string
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=> void
}

export type ItemType={
    title:string, value:number
}

export function Accordion(props: AccordionPropsType) {

    return (<>
        <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>

        {!props.collapsed && <AccordionBody/>}
    </>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<>
        <h3 onClick={(e) => props.onChange()} style={{color: props.color ? props.color : 'black'}}>--{props.title}--</h3>
    </>)
}

function AccordionBody() {
    return (<>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>)
}