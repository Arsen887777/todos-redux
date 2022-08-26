import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, editTodo} from "../store/todos/action";

export const Todo = (props) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(props.title);

    const handleDelete = id => {
        dispatch(deleteTodo(id))
    }
    const  EditTodos = () => {
        setEdit(!edit)
        dispatch(editTodo({
            id: props.id,
            title,
        }))
    }

    const handleDeleteTodo = () => handleDelete(props.id);

    const handleTitleChange = e => setTitle(e.target.value);

    return (
        <ul className='list-unstyled'>
            {edit ? <input type='text' className='form-select-sm' value={title} onChange={handleTitleChange} /> :
                <li className='nav-item' key={props.id} onClick={handleDeleteTodo} onDoubleClick={EditTodos}>{title}</li>}
        </ul>
    )
}
