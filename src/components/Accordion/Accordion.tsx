import React, {useState} from "react";

type AccordionType = {
    title: string
    // collapsed: boolean
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
        <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
    </>)
}

function AccordionBody() {
    return (<>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>)
}