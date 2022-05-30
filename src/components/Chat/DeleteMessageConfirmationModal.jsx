import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

export const DeleteMessageConfirmationModel = (props) => {
    return (
        <>
            <Modal show={props.openModal} onHide={props.handleCloseModal}>
                <ModalHeader closeButton>
                    <ModalTitle>{props.title}</ModalTitle>
                </ModalHeader>
                <ModalBody>{props.body}</ModalBody>
                <ModalFooter>
                    <Button variant='primary' onClick={props.deleteClickHandler}>
                        Yes
                    </Button>
                    <Button variant='danger' onClick={props.handleCloseModal}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    )
}