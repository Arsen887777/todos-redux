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
    const  editTodos = () => {
        setEdit(!edit)
        dispatch(editTodo({
            id: props.id,
            title,
        }))
    }
    const handleKeyDown = e =>  {
        if (e.key === 'Enter') {
            editTodos();
        }
    }
    const handleEdit = e => setEdit(e.target.value);

    const handleDeleteTodo = () => handleDelete(props.id);

    const handleTitleChange = e => setTitle(e.target.value);

    return (
        <>
        <ul className='list-unstyled'>
            {edit ? <input type='text' className='form-select-sm' value={title} onChange={handleTitleChange} onKeyDown={handleKeyDown} /> :
                <li className='nav-item' key={props.id}  onDoubleClick={editTodos}>{title}</li>}
        </ul>
            {title ? <button className='btn btn-danger m-2' onClick={handleDeleteTodo}>Delete</button> : ''}
            {edit ? <button className='btn btn-primary' onClick={handleEdit}>Save Edit</button> : ''}
            </>

    )
}
