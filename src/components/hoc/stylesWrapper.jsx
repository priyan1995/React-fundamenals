import React from 'react';
import CommonStyles from './../Common-Components/CommonStyles';

const translateProps = (props) => {
    let _style = { ...CommonStyles.default }
    if (props.disable) {
        _style = { ..._style, ...CommonStyles.disable }
    }
    const newProps = {...props,styles:_style }

    return newProps
}

export default (WrappedComponent) => {
    return function wrappedRender(args){
       return WrappedComponent(translateProps(args));
    }
}