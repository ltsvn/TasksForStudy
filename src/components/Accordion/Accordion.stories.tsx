import React, {useState} from "react";
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})
export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {...GetCategoryObj('Event')},
        onClick: {...GetCategoryObj('Event')},
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        title: {...GetCategoryObj('Main')}
    }
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const CallbacksProps = {
    onChange: action('clicked'),
    onClick: action('clicked'),
}


export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    ...CallbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}
export const UsersUncollapsedMode2 = Template.bind({});
UsersUncollapsedMode2.args = {
    ...CallbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}
    />
};

ModeChanging.args = {
    titleValue : 'Users',
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}









