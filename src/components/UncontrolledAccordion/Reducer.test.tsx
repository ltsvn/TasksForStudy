import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";
import {action} from "@storybook/addon-actions";

test('collapsed should be true', () => {
    //data
const state: StateType = {
    collapsed: false
}

    //action
const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expection
expect(newState.collapsed).toBe(true)

})