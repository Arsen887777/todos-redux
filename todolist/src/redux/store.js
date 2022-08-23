import {combineReducers, createStore} from "redux";
import {reducer} from "./todos/reducer";


export const reducers = combineReducers({
    ...reducer
})

export const store = createStore(reducer);

