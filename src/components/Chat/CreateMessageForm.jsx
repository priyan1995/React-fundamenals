import React, { useState } from 'react';
import { CreateMessage } from './CreateMessage';

export const CreateMessageForm = (props) => {

    const [newMessage,setNewMessage] = useState('');

    const handleOnChangeMessage = (e) => {
        setNewMessage(e.target.value);
    }

    const handleOnSubmit = (event) => {
        CreateMessage(props.db, setNewMessage, event, props.user, newMessage);
    }


    return (
        <>
            <form onSubmit={handleOnSubmit} className="pd-send-message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleOnChangeMessage}
                    placeholder={props.placeholder} />
                <button type='submit' disabled={!newMessage}>{props.buttonText}</button>
            </form>
        </>
    )
}