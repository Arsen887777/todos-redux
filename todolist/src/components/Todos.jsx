import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../redux/todos/reducer";
import {dispatchDelete} from "../redux/action";

export  const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const handleDelete = id => dispatch(dispatchDelete(
        id))

    return (
        <ul className='list-unstyled'>
            {(!todos || !todos.length) ? <p>NO TODOS</p> : todos.map(todo => <li className='nav-item'
                                    onClick={ () => handleDelete(todo.id)} key={todo.id}>
                                    {todo.title}</li>)}
        </ul>
    )
};
