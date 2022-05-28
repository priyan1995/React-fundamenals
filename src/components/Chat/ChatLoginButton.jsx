import React from 'react';

export const ChatLoginButton = (props) => {
    return(
        <>
        <button onClick={props.onClick}>{props.children}</button>
        </>
    )
}