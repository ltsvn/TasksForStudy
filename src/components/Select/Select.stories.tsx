import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import React, {ChangeEvent, useState} from "react";

export default {
    title: 'Select',
    component: Select,
};
const CallbacksProps = {
    onChange: action('clicked'),
    onClick: action('clicked'),
}

export const WithValue = () => {
    const [value, setValue] = useState('2');
    return <>
        <Select titleValue={value} onChange={setValue} items={[{title: 'Dimych', value: '1'},
            {title: 'Valera', value: '2'},
            {title: 'Artem', value: '3'}
        ]}/>
    </>
}

export const WithoutValue = () => {
        const [value, setValue] = useState(null);
    return <>
        <Select onChange={setValue} titleValue={value} items={[{title: 'Dimych', value: '1'},
            {title: 'Valera', value: '2'},
            {title: 'Artem', value: '3'}
        ]}/>
    </>}

