import {ADD_TODO} from "./actionTypes";
import {DELETE_TODO} from "./actionTypes";

const initialState = {
    todos: [],
};

export const selectTodos = initialState => initialState.todos;
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
}




