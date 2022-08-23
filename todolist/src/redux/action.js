import {ADD_TODO} from "./todos/actionTypes";
import {DELETE_TODO} from "./todos/actionTypes";

export const dispatchTodo = (payload) => {

    return {
        type: ADD_TODO,
        payload
    }
}

export const dispatchDelete = (payload) => {

    return {
        type: DELETE_TODO,
        payload
    }
}


