import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../store/todos/action";

export const Todo = (props) => {
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteTodo(id))
    }

    const handleDeleteTodo = () => handleDelete(props.id);

    return (
        <ul className='list-unstyled'>
            <li className='nav-item' onClick={ (handleDeleteTodo) } key={props.id}>
                {props.title}</li>
        </ul>
    )
}
