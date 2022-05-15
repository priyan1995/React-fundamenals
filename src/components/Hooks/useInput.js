import {useState} from 'react';

export const useInput = (initialValue) => {

    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        //es 6 short hand
        value,
        onChange: (e) => { setValue(e.target.value) }
    }

    return[value,bind,reset]

   
}

export default useInput;