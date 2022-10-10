import React, {ChangeEvent, useReducer, useState} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

export type AccordionPropsType = {
    titleValue: string
    color?: string
}



export function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (<>
        {/*<AccordionTitle title={props.titleValue} color={props.color} onClick={()=> setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} color={props.color} onClick={() => {
            dispatch({type: TOGGLE_CONSTANT})
        }}/>
        {!state.collapsed && <AccordionBody/>}
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