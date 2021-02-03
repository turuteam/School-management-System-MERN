import React, {useState} from 'react';
import Search from './Search';
import  Table from './AttendanceTable'

function Attendance() {
    const [searchItems, setsearchItems] = useState({
        class: "",
        month: "",
        classID: "",
      })

      const handleSearch = (e) => {
        e.preventDefault();
      }

      const attendanceData = [
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
        { studentID: "BK2021",name:'Frozen', lastname:'yoghurt'},
      ];

    return (
        <div>
            <Search 
            searchItems={searchItems} 
            handleSearch={handleSearch}
            setsearchItems={setsearchItems}/>
            <Table attendanceData={attendanceData}/>
        </div>
    )
}

export default Attendance
