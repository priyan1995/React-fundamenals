import React from 'react';

export const ChatButton = (props) => {
    return(
        <>
        <button onClick={props.onClick}>{props.children}</button>
        </>
    )
}