import React, {ChangeEvent, useState} from "react";

export type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
    // onChange: () => void
    /**
     * elements that are showed when accordion is opened(not collapsed
     */
    // items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    // onClick: (value: any) => void
    /**
     * optional Color of header text
     */
    color?: string

}



export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (<>
        <AccordionTitle title={props.titleValue} color={props.color} onClick={()=> setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </>)
}

type AccordionTitleType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (<>
        <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => {
            props.onClick()
        }}>--{props.title}--</h3>
    </>)
}

function AccordionBody() {
    return (<>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>)
}