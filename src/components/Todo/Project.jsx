import React from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import { ProjectRename } from './ProjectRename';

export const Project = (props) => {
    const project = props.project
    return (
        <>
            <div className='pd-project'>

                <div className='name'>
                    {project.name}
                </div>

                <div className='btns'>
                    {
                        props.edit ?
                            <div className='edit-delete'>
                                <span className='edit'>
                                    <Pencil size="13" />
                                </span>
                                <span className='delete'>
                                    <XCircle size="13" />
                                </span>
                            </div>
                            :
                            project.numOfTodos === 0 ?
                                ""
                                :
                                <div className='total-todos'>
                                    {project.numOfTodos}
                                </div>
                    }

                </div>

            </div>
        </>
    )
}