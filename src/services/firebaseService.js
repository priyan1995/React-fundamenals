import firebase from 'firebase/app';

export function chatServiceFirebase() {
    firebase.initializeApp({
        apiKey: "AIzaSyAOgPLp1P4CSKjQEBUsKSuz2aG9eFQ6yh4",
        authDomain: "react-chat-590d9.firebaseapp.com",
        projectId: "react-chat-590d9",
        storageBucket: "react-chat-590d9.appspot.com",
        messagingSenderId: "334471822027",
        appId: "1:334471822027:web:83c6ab7de1cd054232394e"
    })
}