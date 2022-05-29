import { createNewMessage } from '../../services/createNewMessageService';

export const CreateMessage =(db,setNewMessage,event,user,newMessage) =>{

    const { uid, displayName, photoURL } = user;
    event.preventDefault();
    setNewMessage('');

    if (db) {
       createNewMessage(db,newMessage,uid, displayName, photoURL);
    }
}