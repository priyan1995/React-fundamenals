import React, { useState } from 'react';

export const useDynamicColor = () => {

    const [color, setColor] = useState();

    const changeColor = {

        onClick: () => { setColor(Math.random().toString().substr(-6)) }
    }

    return{
        color,
        changeColor
    }
}