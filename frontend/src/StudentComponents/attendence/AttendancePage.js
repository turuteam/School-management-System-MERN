import React from 'react';
import AttendanceForm from '../../components/tables/AttendanceTable'

function AttendancePage() {


    const attendanceData = [
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"},
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"},
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"},
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"},
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"},
        {id: 1, date: "Tuesday, February 9, 2021", status: "present"}
    ]
    return (
        <div>
            <h3>Attendance List</h3>
            <AttendanceForm  attendanceData={attendanceData} /> 
        </div>
    )
}

export default AttendancePage
