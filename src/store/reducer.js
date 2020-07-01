/*
@Author Admin
@Date 2020/05/01 22:01
*/

import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'
const defaultState = {
    inputValue: 'abc',
    list: ['a', 'b']
}
export default (state = defaultState, action) => {
    let newState = {}
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            return newState
        case DEL_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index,1)
            return newState
        case INIT_LIST_ACTION:
            newState = JSON.parse(JSON.stringify(state))
            newState.list=action.data
            return newState


    }
    return state
}
