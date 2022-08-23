import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {dispatchTodo} from "../redux/action";

export const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const handleChange = event => setNewTodo(event.target.value);


    const handleClick = () => {
        setIsAdding(!isAdding);
        dispatch(dispatchTodo({
            id: v4(),
            title: newTodo,
        }))

        setNewTodo('');
    }

    return (
        <>
            {isAdding && <input className='form-select-sm' value={newTodo} onChange={handleChange} type="text"/>}
            <button className="btn btn-success" onClick={handleClick}>ADD TODO</button>
        </>
    )
};