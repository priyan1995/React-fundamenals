import React from 'react';

const styles = {
    default: {
        backgroundColor:'#737373',
        color: '#eae8e8',
        padding: '10px',
        border:'none',
        margin:'30px'
    },disable: {
        backgroundColor:'#9c9c9c',
        color: '#c7c6c6',
    }
}

const ButtonOne = (props) => {
    let _style = { ...styles.default }
    if(props.disable){
        _style = {..._style, ...styles.disable}
    }
    return(
        <button style={_style}> I am Button One</button>
    )
}

export default ButtonOne