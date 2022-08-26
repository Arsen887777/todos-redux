import {ADD_TODO, EDIT_TODO, DELETE_TODO} from "./actionTypes";

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

        case EDIT_TODO :
            return {
                ...state,
                todos: [state.todos.map(todo => action.payload.id === todo.id ?
                       {...todo, title: action.payload.title} : todo)]
            }
        default:
            return state;
    }
}




