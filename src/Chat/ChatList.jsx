
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formatRelative from 'date-fns/formatRelative';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteMessageConfirmationModel } from '../components/Chat/DeleteMessageConfirmationModal';
import { deleteMessage } from '../services/deleteMessageService';

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
        deleteMessage(msgid, db);
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

                <Button className="pd-delete-message-btn" variant="danger" onClick={() => handleOpenModal()}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>

            </div>
            
            <ToastContainer />

            <DeleteMessageConfirmationModel
                title="Delete Message"
                body="Are you sure want to delete this message ?"
                deleteClickHandler={() => deleteClickHandler(id)}
                handleCloseModal={handleCloseModal}
                openModal={openModal}
            />


        </>
    )
}