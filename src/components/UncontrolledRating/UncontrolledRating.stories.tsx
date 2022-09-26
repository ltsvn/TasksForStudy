import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RatingValueType, UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={action('clicked')}/>;
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={action('clicked')}/>;
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={action('clicked')}/>;
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={action('clicked')}/>;
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={action('clicked')}/>;
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={action('clicked')}/>;






// export const RatingChanging= () => {
//     const [rating, setRating]=useState<RatingValueType>(3);
//     return <UncontrolledRating defaultValue={rating} onClick={setRating}/>
// };









