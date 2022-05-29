import React from 'react';
import firebase from 'firebase/compat/app';



export const googleSignIn = async (auth) => {
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