import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
};

export const OnMode = () => <OnOff on={true} onChange={action('clicked')} />;
export const OffMode = () => <OnOff on={false} onChange={action('clicked')} />;

export const RatingChanging= () => {
    const [value, setValue]=useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
};









