import React, {useState, useEffect} from 'react';
import Search from '../../shared/Search';
import  Table from '../../shared/AttendanceTable';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios'


function Attendance() {
      const [classID, setclassID] = useState("");
      const [month, setmonth] = useState("");
      const [attendanceData, setattendanceData] = useState([])

  
      useEffect(() => {
        axios.get('/attendance/staff').then(res => {
            setattendanceData(res.data)
        })
   }, [])


      const handleSearch = (e) => {
        e.preventDefault();
      }

      const inputFields = [
        {
            type: "select",
            label: "Search by Class",
            value: classID,
            options: [{id: "a", name:"Class A"}, {id: "b", name:"Class B"}, {id: "b", name:"Class C"},{id: "d", name:"Class D"}],
            name: "studentID",
            onChange: setclassID
        },
       {
         type: "date",
         label: "Search by Month",
         value: month,
         options: [{id: "1", name:"Jan"}, {id: "2", name:"Feb"}, {id: "3", name:"March"},{id: "4", name:"April"}],
         name: "month",
         onChange: setmonth
       }
    ]

    return (
        <div>
          <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-8">
                <Search 
                title= "Staff's Attendance"
                inputFields={inputFields}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                   <Link to="/students/attendance/register" className="btn blue__btn">Register Attendance</Link>
              </div>
          </div>
           
            <Table isStaff={true} attendanceData={attendanceData}/>
        </div>
    )
}

export default Attendance
