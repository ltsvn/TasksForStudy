import React, {useState} from "react";

export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: (collapsed: boolean)=>void
}


export function Accordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false)
        return (<>
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} />

            {!collapsed && <AccordionBody/>}
        </>)
}

type AccordionTitleType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitleType) {
    return (<>
        <h3 onClick={(e)=>{props.onClick()}}>--{props.title}--</h3>
    </>)
}

function AccordionBody() {
    return (<>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>)
}