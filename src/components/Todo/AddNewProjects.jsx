import React, { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { CustomModal } from '../Common-Components/Modal';

export const AddNewProjects = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='pd-add-new-project'>
                <div className='add-button' >
                    <span onClick={()=>setShowModal(true)}>
                        <Plus size='20'  />
                    </span>
                </div>
                <CustomModal showModal={showModal} setShowModal={setShowModal}>

                </CustomModal>
            </div>
        </>
    )
} 