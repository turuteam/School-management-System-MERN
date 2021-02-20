import React, {useState, useEffect} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from '../../store/axios'

const localizer = momentLocalizer(moment)

function SchoolCalender() {
    const [events, setevents] = useState([])

    useEffect(() => {
        axios.get('/calendar').then(res => {
          console.log(res.data)
          setevents(res.data)
        })
       
     }, [])
    return (
        <div className="content__container">
            <h3 className="mb-4">Event Calender</h3>
           <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
        </div>
    )
}

export default SchoolCalender
