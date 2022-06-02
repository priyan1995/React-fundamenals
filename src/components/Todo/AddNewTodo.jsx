import React, { useState } from 'react';
import { CustomModal } from '../Common-Components/Modal';

export const AddNewTodo = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='pd-add-new-todo'>
                <button className='btn' onClick={() => setShowModal(true)}> + New Todo</button>

                <CustomModal showModal={showModal} setShowModal={setShowModal}>
                    <h4>Add New Todo</h4>
                </CustomModal>
            </div>

        </>
    )
}