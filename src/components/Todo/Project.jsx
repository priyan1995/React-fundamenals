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
                    <div className='edit-delete'>
                        <span>
                            <Pencil size="13" />
                        </span>
                        <span>
                            <XCircle size="13" />
                        </span>
                    </div>

                    <div className='total-todos'>
                        {project.numOfTodos}
                    </div>
                </div>

            </div>
        </>
    )
}