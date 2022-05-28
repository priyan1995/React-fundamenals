import React from 'react';
import firebase from 'firebase/compat/app';
// import { FirebaseApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import 'firebase/compat/firestore';
import { ChatLoginButton } from '../components/Chat/ChatLoginButton';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

firebase.initializeApp({
    apiKey: "AIzaSyAOgPLp1P4CSKjQEBUsKSuz2aG9eFQ6yh4",
    authDomain: "react-chat-590d9.firebaseapp.com",
    projectId: "react-chat-590d9",
    storageBucket: "react-chat-590d9.appspot.com",
    messagingSenderId: "334471822027",
    appId: "1:334471822027:web:83c6ab7de1cd054232394e"
})

export const Chat = () => {

    const signInWithGoogle = async() => {
        //retrieve google provider object
        const provider = new firebase.auth.GoogleAuthProvider();
        //set language to the default browser preference
        auth.useDeviceLanguage();
        //start sign in process
        try{
            await auth.signInWithPopup(provider);
        }catch(error){
            console.log(error);
        }
    }


    return(
        <>
        <ChatLoginButton onClick={signInWithGoogle}>Sign In With Google</ChatLoginButton>
        </>
    )
}
