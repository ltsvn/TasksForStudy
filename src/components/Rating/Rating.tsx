import React, {useState} from "react";


type RatingProps = {
    value: number
    onClick: (value: number)=> void
}



export function Rating(props: RatingProps) {
    let [value, setValue] = useState(0)

    return (<div>
        <Star selected={value > 0} setValue={setValue} value={1}/>

        <Star selected={value > 1} setValue={setValue} value={2}/>

        <Star selected={value > 2} setValue={setValue} value={3}/>

        <Star selected={value > 3} setValue={setValue} value={4}/>

        <Star selected={value > 4} setValue={setValue} value={5}/>

    </div>)
}

type StarType = {
    selected: boolean
    value: 1|2|3|4|5
    setValue: (value: number) => void
}

function Star(props: StarType) {
    return <span onClick={()=>{props.setValue(props.value)}}> {props.selected ? <b>Star </b> : 'Star'} </span>
}