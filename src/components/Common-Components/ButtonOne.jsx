import React from 'react';
import stylesWrapper from '../hoc/stylesWrapper';

const ButtonOne = (props) => {

    return(
        <button style={props.styles}> I am Button One</button>
    )
}

export default stylesWrapper( ButtonOne )