import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';


export const MaterialUiCheckbox = () => {
    const [checked, setChecked] = useState(true)
    return (
        <div>
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                inputProps={{
                    'area-label': 'secondary checkbox'
                }}
            />
        </div>
    )
}