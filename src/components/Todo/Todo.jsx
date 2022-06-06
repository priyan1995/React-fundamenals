import React from 'react';

export const Todo = (props) => {

    const todo = props.todo;

    return (
        <>
            <div className='todo'>
                {todo.text}
            </div>
        </>
    )
}