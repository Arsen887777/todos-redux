import React from "react";
import {useSelector} from "react-redux";
import {selectTodos} from "../store/todos/reducer";
import {Todo} from "./Todo";

export  const Todos = () => {
    const todos = useSelector(selectTodos);

    return (
        <ul className='list-unstyled'>
            {(!todos || !todos.length) ? <p>NO TODOS</p> : todos.map(todo => <Todo key={todo.id} {...todo}/> )}
        </ul>
    )
};
