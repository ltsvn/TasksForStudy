import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    color?: string
    onChange: () => void
    onClick: (value:any)=> void
    items:ItemType[]
}

export type ItemType = {
    title:string
    value: any
}

export function Accordion(props: AccordionPropsType) {

    return (<>
        <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>

        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick }/>}
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

type AccordionBodyPropsType = {
    items:ItemType[]
    onClick: (value:any)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li
            onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}