import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <OnOff />
            {/*<PageTitle title={'This App component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <Accordion title={'Menu'} />
            <Accordion title={'Users'} />
            {/*Article 2*/}
            <Rating />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}
type PageTitleType = {
    title:string
}


function PageTitle(props: PageTitleType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
