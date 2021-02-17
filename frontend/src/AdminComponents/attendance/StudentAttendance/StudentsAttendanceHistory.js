import React, {useState, useEffect} from 'react';
import Search from '../../shared/Search';
import  Table from '../../shared/AttendanceTable';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios'


function Attendance() {
      const [classID, setclassID] = useState("");
      const [date, setDate] = useState("");
      const [attendanceData, setattendanceData] = useState([])
  

      const handleSearch = (e) => {
        e.preventDefault();
      }


      useEffect(() => {
           axios.get('/attendance/students').then(res => {
               setattendanceData(res.data)
           })
      }, [])


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
         label: "Search by Date",
         value: date,
         name: "date",
         onChange: setDate
       }
    ]

    return (
        <div>
          <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-8">
                <Search 
                title= "Student's Attendance"
                inputFields={inputFields}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                   <Link to="/students/attendance/register" className="btn blue__btn">Register Attendance</Link>
              </div>
          </div>
           
            <Table isStaff={true}  attendanceData={attendanceData}/>
        </div>
    )
}

export default Attendance
