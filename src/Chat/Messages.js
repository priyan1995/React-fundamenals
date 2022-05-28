import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { ChatList } from './ChatList';

export const Messages = ({ user = null, db = null }) => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const { uid, displayName, photoURL } = user;

    // console.log(db);
    // console.log(user);

    useEffect(() => {
        if (db) {

            const unsubscribe = db
                .collection('Messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    setMessages(data);
                })


            return unsubscribe
        }
    }, [db]);

    console.log(messages);
    //console.log(newMessage);

    const handleOnChangeMessage = (e) => {
        setNewMessage(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setNewMessage('')

        if (db) {
            db.collection('Messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL

            })
        }

    }

    return (
        <>
            <ul>
                {
                    messages.map(message => (
                        <li key={message.id}>
                            <ChatList {...message} />
                        </li>
                    ))
                }
            </ul>

            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleOnChangeMessage}
                    placeholder="Type your message here..." />
                <button type='submit' disabled={!newMessage}>Send</button>
            </form>
        </>
    )








}