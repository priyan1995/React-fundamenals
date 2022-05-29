import firebase from 'firebase/compat/app';

export function createNewMessage(db,newMessage,uid, displayName, photoURL){
    db.collection('Messages').add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL

    })
}