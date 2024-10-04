import {reducer, StateType, TOGGLE_CONSTANT} from './reducer';
import {action} from '@storybook/addon-actions';

test ('reducer collapsed should be true', () => {
    //data
    const  state: StateType = {
        collapsed: false
    }
    //action
    const  newState = reducer(state, {type: TOGGLE_CONSTANT})
    //expect
    expect(newState.collapsed).toBe(true)

})

test ('reducer collapsed should be false', () => {
    //data
    const  state: StateType = {
        collapsed: true
    }
    //action
    const  newState = reducer(state, {type: TOGGLE_CONSTANT})
    //expect
    expect(newState.collapsed).toBe(false)

})

test ('reducer error', () => {
    //data
    const  state: StateType = {
        collapsed: true
    }
    //action
    expect(() => {reducer(state, {type: 'FakeType'})}).toThrowError()
    //expect

})