import React from 'react';
import { AddNewTodo } from '../components/Todo/AddNewTodo';
import { Calendar } from '../components/Todo/Calendar';
import { EditTodo } from '../components/Todo/EditTodo';
import { Main } from '../components/Todo/Main';
import { Projects } from '../components/Todo/Projects';
import { Sidebar } from '../components/Todo/Sidebar';
import { TodoList } from '../components/Todo/TodoList';
import { User } from '../components/Todo/User';
import '././todo.css';

export const Todo = () => {
    return (
        <>
            <div className='pd-todo-wrapper'>

                <Sidebar>
                    <User />
                    <AddNewTodo />
                    <Calendar />
                    <Projects />
                </Sidebar>

                <Main>
                    <TodoList />
                    <EditTodo />
                </Main>
            </div>
        </>
    )
}