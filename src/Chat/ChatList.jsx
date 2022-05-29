import formatRelative from 'date-fns/formatRelative';
import React from 'react';

export const ChatList = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = ''

}) => {
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
            </div>
        </>
    )
}