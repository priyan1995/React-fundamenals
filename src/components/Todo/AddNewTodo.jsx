import React, { useState } from 'react';
import { Bell, CalendarDate, Clock, Palette, X } from 'react-bootstrap-icons';
import { CustomModal } from '../Common-Components/Modal';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';

export const AddNewTodo = () => {

    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState();
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());



    return (
        <>
            <div className='pd-add-new-todo'>

                <div className='btn' >
                    <button onClick={() => setShowModal(true)}> + New Todo</button>
                </div>

                <CustomModal showModal={showModal} setShowModal={setShowModal}>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <form>

                            <div className='text'>
                                <h4>Add New Todo</h4>
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
                                    <DatePicker
                                        value={day}
                                        onChange={day => setDay(day)} />
                                </div>
                            </div>

                            <div className='pick-time'>
                                <div className='title'>
                                    <Clock />
                                    <p>Choose a time</p>
                                    <TimePicker
                                        value={time}
                                        onChange={time => setTime(time)}
                                    />
                                </div>
                            </div>

                            <div className='pick-project'>
                                <div className='title'>
                                    <Palette />
                                    <p>Choose a project</p>
                                </div>
                                <div className='projects active'>
                                    Personal
                                </div>
                                <div className='projects'>
                                    Work
                                </div>
                            </div>

                            <div className='cancel' onClick={() => setShowModal(false)}>
                                <X size='40' />
                            </div>

                            <div className='confirm'>
                                <button>+ Add to do</button>
                            </div>


                        </form>
                    </MuiPickersUtilsProvider>
                </CustomModal>
            </div>

        </>
    )
}