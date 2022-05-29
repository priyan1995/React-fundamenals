import React from 'react';
import firebase from 'firebase/compat/app';

const auth = firebase.auth();

export const chatSignOut = async() => {
    try{
        await firebase.auth().signOut();
    } catch(error){
        console.log(error);
    }
}