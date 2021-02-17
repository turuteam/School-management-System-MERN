import React, {useState , useEffect} from 'react'
import Search from '../../shared/Search';
import  Table from '../../shared/RegisterAttendance';
import axios from '../../../store/axios';
import {errorAlert} from '../../../utils'



function RegisterAttendance() {
    const [classID, setclassID] = useState("");
    const [loading, setloading] = useState(false)
    const [students, setstudents] = useState([])

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

    useEffect(() => {
      if(classID){
        axios.get(`/students/class/${classID}`).then(res => {
          let data = res.data.students?.map(student =>  {
            return {userID: student.userID, name: student.name, surname: student.surname, status: false}
          })
          setstudents(data)
           
        })
      }
    }, [classID])


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
