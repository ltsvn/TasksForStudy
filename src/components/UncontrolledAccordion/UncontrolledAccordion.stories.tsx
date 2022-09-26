import React, {useState} from "react";
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion, AccordionPropsType} from "./UncontrolledAcordion";
import {Button} from "../../stories/Button";

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
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

// const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;
// const CallbacksProps = {
//     onChange: action('clicked'),
//     onClick: action('clicked'),
// }


// export const CollapsedMode2 = Template.bind({});
// CollapsedMode2.args = {
//     ...CallbacksProps,
//     title: 'Menu',
//     collapsed: true,
//     items: [],
//
// }
// export const UncollapsedMode2 = Template.bind({});
// UncollapsedMode2.args = {
//     ...CallbacksProps,
//     title: 'Users',
//     collapsed: false,
//     items: [{title: 'Dimych', value: 1},
//         {title: 'Valera', value: 2},
//         {title: 'Artem', value: 3},
//         {title: 'Viktor', value: 4}],
//
// }


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <UncontrolledAccordion {...args}
    />
};

// ModeChanging.args = {
//     title: 'Users',
//     items: [{title: 'Dimych', value: 1},
//         {title: 'Valera', value: 2},
//         {title: 'Artem', value: 3},
//         {title: 'Viktor', value: 4}
//     ],
//     onClick: (value) => {
//         alert(`user with ID ${value} should be happy`)
//     }
// }









