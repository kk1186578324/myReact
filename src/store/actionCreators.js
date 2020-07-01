/*
@Author Admin
@Date 2020/05/02 13:57
*/
import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value

})
export const getInputAddAction = ()=>({
    type:ADD_TODO_ITEM
})
export const getInputDelAction = (index)=>({
    type:DEL_TODO_ITEM,
    index
})
export const initListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})
