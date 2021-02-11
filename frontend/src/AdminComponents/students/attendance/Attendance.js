import React, {useState} from 'react';
import Search from '../../shared/Search';
import  Table from '../../shared/AttendanceTable';
import {Link} from 'react-router-dom';


function Attendance() {
    
      const [classID, setclassID] = useState("");
      const [month, setmonth] = useState("");
  

      const handleSearch = (e) => {
        e.preventDefault();
      }

      const attendanceData = [
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: true},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: true},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: true},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: false},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: true},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt', date: "25/02/2021", status: false},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt',date: "25/02/2021", status: true},
      ];

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
         type: "select",
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
                title= "Student's Attendance"
                inputFields={inputFields}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                   <Link to="/students/attendance/register" className="btn blue__btn">Register Attendance</Link>
              </div>
          </div>
           
            <Table attendanceData={attendanceData}/>
        </div>
    )
}

export default Attendance
