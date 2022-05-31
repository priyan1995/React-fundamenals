import React from 'react';
import { Todo } from './Todo';
import { TodoNext7Days } from './TodoNext7Days';

export const TodoList = () => {
    return (
        <>
            <Todo />
            <TodoNext7Days />
        </>
    )
}