import React from 'react';
import firebase from 'firebase/app';

export const chatSignOut = async() => {
    try{
        await firebase.auth().signOut();
    } catch(error){
        console.log(error);
    }
}