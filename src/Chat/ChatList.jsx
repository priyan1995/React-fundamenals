import formatRelative from 'date-fns/formatRelative';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ChatList = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
    id,
    db

}) => {

   // console.log(db)

// console.log(id)

const deleteClickHandler = (msgid) => {
    db.collection('Messages').doc(msgid).delete()
    .then(()=>{
        toast("Message Deleted!");
    }).catch(()=>{
        toast.error("Something went wrong!")
    })
}

    return (
        <>
            <div className='pd-message-item'>
                {
                    photoURL ? (
                        <>
                            <img src={photoURL} alt="Avatar" width={45} height={45} />
                        </>
                    ) : null
                }

                <div>
                    {displayName ? <p className='pd-display-name'> {displayName}</p> : null}

                    {
                        createdAt?.seconds ? (
                            <span>
                                {
                                    formatRelative(new Date(createdAt.seconds * 1000), new Date())
                                }
                            </span>
                        ) : null
                    }
                    <p className='pd-message'>{text}</p>
                </div>

                <button onClick={() => deleteClickHandler(id)}>Delete Message</button>

               

            </div>
            <ToastContainer />
        </>
    )
}