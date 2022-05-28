import React, { useEffect, useState } from 'react';

export const Messages = (props) => {

    const [messages, setMessages] = useState([]);

    const db = props.db;
    const user = props.user;

    console.log(db);
    console.log(user);

    useEffect(()=>{
        if(db){

            const unsubscribe = db
            .collection('Messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map( doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMessages(data);
            })
            
            
            return unsubscribe
        }
    },[db]);

    console.log(messages)

    return(
        <>
        <ul>
            {
                messages.map(message => (
                    <li key={message.id}>{message.text}</li>
                ))
            }
        </ul>
        </>
    )








}