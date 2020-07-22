import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from  './actionTypes.js'

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getInputAddAction = (value)=>({
    type:ADD_TODO_ITEM
})
export const getInputDeleteAction = (value)=>({
    type:DELETE_TODO_ITEM,
    value
})
