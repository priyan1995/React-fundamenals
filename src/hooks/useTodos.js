import { useEffect, useState } from "react";
import firebaseInitialize from "../services/todoFirebaseService";
import 'firebase/firestore';

export function useTodos(){

    
    const [todos, setTodos] = useState([]);

    useEffect(()=>{

        let unsubscribe = firebaseInitialize
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