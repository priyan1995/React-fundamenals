import React, { useState } from 'react';
import { CustomModal } from '../Common-Components/Modal';

export const AddNewTodo = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='pd-add-new-todo'>

                <div className='btn' >
                    <button onClick={() => setShowModal(true)}> + New Todo</button>
                </div>

                <CustomModal showModal={showModal} setShowModal={setShowModal}>
                    <h4>Add New Todo</h4>
                </CustomModal>
            </div>

        </>
    )
}