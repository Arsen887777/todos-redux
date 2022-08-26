import {ADD_TODO} from "./actionTypes";
import {DELETE_TODO} from "./actionTypes";
import {EDIT_TODO} from "./actionTypes";


export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const editTodo = (payload) => {
        return {
            type: EDIT_TODO,
            payload
        }
}



