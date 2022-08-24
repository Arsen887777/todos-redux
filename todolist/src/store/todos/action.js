import {ADD_TODO} from "./actionTypes";
import {DELETE_TODO} from "./actionTypes";

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


