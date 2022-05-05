import React from 'react';

const styles = {
    default: {
        backgroundColor:'#737373',
        color: '#eae8e8',
        padding: '10px',
        border:'none',
        margin:'30px'
    }
}

const ButtonOne = () => {
    return(
        <button style={styles.default}> I am Button One</button>
    )
}

export default ButtonOne