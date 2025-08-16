import {Rating, RatingValueType} from '../components/Rating/Rating';
import {useState} from 'react';
import {UnControlRating} from '../components/Rating/UnControlRating';
import {action} from '@storybook/addon-actions';


export default {
    title: 'UncontroRating',
    component: UnControlRating
}

const callback = action('changed rating')

export const EmptyStars = () => <UnControlRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControlRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlRating defaultValue={5} onChange={callback}/>


