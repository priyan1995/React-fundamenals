import React from 'react';
import { Bell, CalendarDate, Clock, Palette, X } from 'react-bootstrap-icons';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';

export const TodoForm = ({
    showButtons = false,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    handleSubmit,
    projects
}) => {

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form onSubmit={handleSubmit} className="pd-todo-form">

                    <div className='text'>
                        {
                            heading &&
                            <h3>{heading}</h3>
                        }

                        <input
                            type='text'
                            value={text}
                            placeholder='To Do..'
                            autoFocus
                            onChange={(e) => setText(e.target.value)}

                        />
                    </div>
                    <div className='remind'>
                        <div className='title'>
                            <Bell />
                            <p>Remind Me</p>
                        </div>

                    </div>

                    <div className='pick-day'>
                        <div className='title'>
                            <CalendarDate />
                            <p>Choose a day</p>
                        </div>
                        <DatePicker
                            value={day}
                            onChange={day => setDay(day)} />
                    </div>

                    <div className='pick-time'>
                        <div className='title'>
                            <Clock />
                            <p>Choose a time</p>
                        </div>
                        <TimePicker
                            value={time}
                            onChange={time => setTime(time)}
                        />
                    </div>

                    {
                        projects.map(project =>
                            <div className='project' key={project.id}>
                                {project.name}
                            </div>
                        )
                    }


                    {
                        showButtons &&
                        <div className='confirm'>
                            <button>+ Add to do</button>
                        </div>

                    }



                </form>
            </MuiPickersUtilsProvider>



        </>
    )
}