import React, {useState , useEffect} from 'react'
import Search from '../../shared/Search';
import  Table from '../../shared/RegisterAttendance';
import axios from '../../../store/axios';
import {errorAlert} from '../../../utils'



function RegisterAttendance() {
    const [classID, setclassID] = useState("");
    const [loading, setloading] = useState(false)
    const [students, setstudents] = useState([
      { userID: "BK2021",name:'Frozen', surname:'Praise', status: false},
      { userID: "BK2022",name:'Frozen', surname:'Fadzie', status: false},
      { userID: "BK2023",name:'Frozen', surname:'Prim', status: false},
      { userID: "BK2024",name:'Frozen', surname:'Ruth', status: false},
      { userID: "BK2025",name:'Frozen', surname:'Fay', status: false},
      { userID: "BK2026",name:'Frozen', surname:'Yolander', status: false},
      { userID: "BK2027",name:'Frozen', surname:'Ray', status: false},
    ])

    const inputFields = [
        {
            type: "select",
            label: "Search by Class",
            value: classID,
            options: [{id: "a", name:"Class A"}, {id: "b", name:"Class B"}, {id: "b", name:"Class C"},{id: "d", name:"Class D"}],
            name: "studentID",
            onChange: setclassID
        },
    ]

    // useEffect(() => {
    //   if(classID){
    //     axios.get(`/students/class/${classID}`).then(res => {
    //       let data = res.data.students.map(student =>  {
    //         return {userID: student.userID, name: student.name, surname: student.surname, status: false}
    //       })
    //       setstudents(data)
           
    //     })
    //   }
    // }, [classID])


    const handleRegisterAttendance = () => {
      setloading(true)
      axios.post('/attendance/register', {users: students, classID, role: "students"}).then(res => {
        setloading(false)
          if(res.data.error){
               errorAlert(res.data.error);
               return 0
          }
      }).catch(err => {
        console.log(err);
        setloading(false)
        errorAlert("Sorry something when wrong");

      })
       
    }


    return (
        <div>
             <Search 
               isReset={true}
                title= "Register Today's  Attendance"
                inputFields={inputFields}
              />
              {classID &&    
              <Table  
                 attendanceData={students} 
                 handleRegister={ handleRegisterAttendance }
                 loading={loading}
                 setattendanceData={setstudents}/>}
        </div>
    )
}

export default RegisterAttendance
