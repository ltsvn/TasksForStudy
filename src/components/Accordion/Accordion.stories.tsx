import React, {useState} from "react";
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const CallbacksProps = {
    onChange: action('clicked'),
    onClick: action('clicked'),
}


export const MenuCollapsedMode=()=><Accordion titleValue={'Menu'} collapsed={true} onChange={action('clicked')} items={[]} onClick={action('clicked')} />


export const UsersUncollapsedMode=()=><Accordion titleValue={'Users'} collapsed={false} onChange={action('clicked')} items={[{title:'Dimych', value:1},{title:'Valera', value:2},{title:'Artem', value:3}]} onClick={action('clicked')} />

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} onClick={action('clicked')}
                      items={[{
                          title:'Dimych', value:1},
                          {title:'Valera', value:2},
                          {title:'Artem', value:3}
                      ]}

    />
};











