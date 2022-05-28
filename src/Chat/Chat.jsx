import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import 'firebase/compat/firestore';
import { ChatButton } from '../components/Chat/ChatButton';
import { Messages } from './Messages';



firebase.initializeApp({
    apiKey: "AIzaSyAOgPLp1P4CSKjQEBUsKSuz2aG9eFQ6yh4",
    authDomain: "react-chat-590d9.firebaseapp.com",
    projectId: "react-chat-590d9",
    storageBucket: "react-chat-590d9.appspot.com",
    messagingSenderId: "334471822027",
    appId: "1:334471822027:web:83c6ab7de1cd054232394e"
})

const auth = firebase.auth();
const db = firebase.firestore();

export const Chat = () => {

    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        });      

        //cleanup subscription
        return unsubscribe;
    }, [])

    const signInWithGoogle = async () => {
        //retrieve google provider object
        const provider = new firebase.auth.GoogleAuthProvider();
        //set language to the default browser preference
        auth.useDeviceLanguage();
        //start sign in process
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
        }
    }


    const signOut = async() => {
        try{
            await firebase.auth().signOut();
        } catch(error){
            console.log(error);
        }
    }

    console.log(user);


    if (initializing) { return "Loading..."; }

    return (
        <>
            {
                user ? (
                    <>
                        <h4>Welcome to the chat</h4>
                        <ChatButton onClick={signOut}>Sign Out</ChatButton>
                        <Messages user={user} db={db} />
                    </>

                ) : (

                    <>
                        <ChatButton onClick={signInWithGoogle}>Sign In With Google</ChatButton>
                    </>

                )
            }

        </>
    )
}
