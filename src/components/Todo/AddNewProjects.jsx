import React, { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { CustomModal } from '../Common-Components/Modal';
import { ProjectForm } from './ProjectForm';

export const AddNewProjects = () => {

    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        console.log('Submitted');
        e.preventDefault();
        console.log(projectName)
    }

    return (
        <>
            <div className='pd-add-new-project'>
                <div className='add-button' >
                    <span onClick={() => setShowModal(true)}>
                        <Plus size='20' />
                    </span>
                </div>
                <CustomModal showModal={showModal} setShowModal={setShowModal}>
                    <ProjectForm
                        handleSubmit={handleSubmit}
                        heading="New Project!"
                        value={projectName}
                        setValue={setProjectName}
                        setShowModal={setShowModal}
                        confirmButtonText=" + Add Project"
                    />
                </CustomModal>
            </div>
        </>
    )
} 