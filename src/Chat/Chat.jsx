import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';
import { ChatButton } from '../components/Chat/ChatButton';
import { Messages } from './Messages';
import { chatServiceFirebase } from '../services/firebaseService';
import { chatSignOut } from '../components/Chat/ChatSignOut';
import { googleSignIn } from '../components/Chat/SignInWithGoogle';
import './chatStyle.css';


chatServiceFirebase();


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
        googleSignIn(auth);
    }

    const signOut = async () => {
        chatSignOut();
    }

    console.log(user);


    if (initializing) { return "Loading..."; }

    return (
        <>
            {
                user ? (
                    <>
                        <div className='pd-chat-box'>
                            <div className='pd-chat-header'>
                                <ChatButton onClick={signOut}>Sign Out</ChatButton>
                            </div>
                            <div className='pd-chat-box-messages'>
                                <h4>Welcome to the chat</h4>
                                <Messages user={user} db={db} />
                            </div>
                        </div>
                    </>

                ) : (

                    <>
                        <div className='pd-google-sign-wrapper'>
                            <ChatButton onClick={signInWithGoogle}>Sign In With Google</ChatButton>
                        </div>
                    </>

                )
            }

        </>
    )
}
