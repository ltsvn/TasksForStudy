import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('clicked')} />;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('clicked')} />;
export const BugMode = () => <div></div>;



// export const RatingChanging= () => {
//     const [value, setValue]=useState<boolean>(true);
//     return <UncontrolledOnOff on={value} onChange={setValue}/>
// };









