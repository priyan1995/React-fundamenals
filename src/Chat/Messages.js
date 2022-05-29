import React, { useEffect, useState } from 'react';
import { ChatList } from './ChatList';
import { CreateMessageForm } from '../components/Chat/CreateMessageForm';

export const Messages = ({ user = null, db = null }) => {

    const [messages, setMessages] = useState([]);

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

            <CreateMessageForm
                placeholder="Type your message here..."
                buttonText="Send"
                db={db}
                user={user}
            />

        </>
    )








}