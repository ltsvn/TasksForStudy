import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
};

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={action('clicked')} />;
export const UncollapsedMode = () => <Accordion title={'Users'} collapsed={false} onChange={action('clicked')} />;

export const AccordionChanging= () => {
    const [value, setValue]=useState<boolean>(true);
    return <Accordion title={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
};









