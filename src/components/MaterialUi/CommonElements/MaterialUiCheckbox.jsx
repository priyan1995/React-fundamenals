import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentLate from '@material-ui/icons/AssignmentLate';

export const MaterialUiCheckbox = () => {
    const [checked, setChecked] = useState(true)
    return (
        <div>
            <FormControlLabel
                control={<Checkbox
                    checked={checked}
                    checkedIcon={<AssignmentTurnedIn />}
                    icon={<AssignmentLate />}
                    onChange={(e) => setChecked(e.target.checked)}
                    inputProps={{
                        'area-label': 'secondary checkbox'
                    }}
                    color="secondary"
                />}
                label="I accept with with terms"

            />
        </div>
    )
}