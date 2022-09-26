import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAcordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">

            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<PageTitle title={'This App component'}/>*/}

            <Accordion titleValue={'Menu'} color='black' collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)}} items={[]} onClick={()=>{}}/>

            {/*<Accordion titleValue={'Users'} color='black' collapsed={false}/>*/}

            <UncontrolledAccordion titleValue={'Menu'}/>

            {/*<UncontrolledAccordion titleValue={'Users'} />*/}

            {/*<UncontrolledRating />*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

        </div>
    );
}

type PageTitleType = {
    title: string
}


function PageTitle(props: PageTitleType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
