import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,GET_DATA_ITEM } from  './actionTypes.js'
import axios from "axios";
import store from "./index";

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
export const getDataAction = (value)=>({
    type:GET_DATA_ITEM,
    value
})
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('/news').then(res=>{
             const data = res.data
            console.log(data)
            const  action =getDataAction(data.data)
            dispatch(action)
        })

    }

}
