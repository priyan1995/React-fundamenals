import { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import 'firebase/compat/firestore';

export function useTodos(){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{

        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map(doc=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
                setTodos(data);
            })
        })

       
        return () => unsubscribe();

    },[])

    return todos;

}