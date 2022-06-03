import React from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';

export const Calendar = () => {

    const calendarItems = ['today', 'next 7 days', 'all days'];
    return (
        <>
            <div className='calendar'>
                <div className='header'>
                    <div className='title'>
                        <p>Calendar</p>
                        <CalendarDate size='18' />
                    </div>
                    <div className='btns'>
                        <span>
                            <CaretUp size='20' />
                        </span>
                    </div>
                </div>

                <div className='items'>
                    {
                        calendarItems.map(item =>
                            <div className='item' key={item}>
                                {item}
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}