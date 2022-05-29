
import formatRelative from 'date-fns/formatRelative';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ChatList = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
    id,
    db

}) => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const deleteClickHandler = (msgid) => {
        db.collection('Messages').doc(msgid).delete()
            .then(() => {
                toast.warn("Message Deleted!", {
                    theme: "dark",
                    autoClose: 1000
                })
            }).catch(() => {
                toast.error("Something went wrong!")
            })

    }

    return (
        <>
            <div className='pd-message-item'>
                {
                    photoURL ? (
                        <>
                            <img src={photoURL} alt="Avatar" width={45} height={45} />
                        </>
                    ) : null
                }

                <div>
                    {displayName ? <p className='pd-display-name'> {displayName}</p> : null}

                    {
                        createdAt?.seconds ? (
                            <span>
                                {
                                    formatRelative(new Date(createdAt.seconds * 1000), new Date())
                                }
                            </span>
                        ) : null
                    }
                    <p className='pd-message'>{text}</p>
                </div>

                <button onClick={() => handleOpenModal()}>Delete Message</button>



            </div>
            <ToastContainer />

            <Modal show={openModal} onHide={handleCloseModal}>
                <ModalHeader closeButton>
                    <ModalTitle>Delete Message</ModalTitle>
                </ModalHeader>
                <ModalBody>Are you sure want to delete this message ?</ModalBody>
                <ModalFooter>
                    <Button variant='primary' onClick={() => deleteClickHandler(id)}>
                        Yes
                    </Button>
                    <Button variant='danger' onClick={handleCloseModal}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>


        </>
    )
}