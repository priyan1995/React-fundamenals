import React, { useState } from 'react';
import { AddNewProjects } from './AddNewProjects';
import { Project } from './Project';
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons';

export const Projects = () => {

    const [showMenu, setShowMenu] = useState(true);

    const projects = [
        { id:1, name:"personal", numOfTodos:0 },
        { id:2, name:"work", numOfTodos:1 },
        { id:3, name:"other", numOfTodos:2 },
    ]

    return (
        <>
            <div className='pd-projects'>
                <div className='header'>
                    <div className='title'>
                        <Palette size='18' />
                        <p>Projects</p>
                    </div>

                    <div className='btns'>
                        {
                            showMenu &&

                            <span>
                                <PencilFill size='15' />
                            </span>

                        }

                        <AddNewProjects />
                        <span>
                            <CaretUp size='20' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}