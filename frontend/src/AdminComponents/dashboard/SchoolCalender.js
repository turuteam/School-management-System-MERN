import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

function SchoolCalender() {
    const myEventsList = [
        // {
        //     title: "first event",
        //     start: "2021-02-01T12:52:18.125Z",
        //     end: "2021-02-01T18:52:18.125Z",
        //     allDay: true,
        //     resource: "123",
        // }
    ]
    return (
        <div className="content__container">
            <h3>Event Calender</h3>
           <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
        </div>
    )
}

export default SchoolCalender
