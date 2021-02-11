import React from 'react'
import AttendanceTable from '../../components/tables/AttendanceTable'

function Attendance() {

    const attendanceData = [
        {id: "123", date: "27/02/2021", status: true},
        {id: "124", date: "27/02/2021", status: false},
        {id: "125", date: "27/02/2021", status: false},
        {id: "126", date: "27/02/2021", status: true}
    ]
    return (
        <div>
            <AttendanceTable  attendanceData={attendanceData}/> 
        </div>
    )
}

export default Attendance
