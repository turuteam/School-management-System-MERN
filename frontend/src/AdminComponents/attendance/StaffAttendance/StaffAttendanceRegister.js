import React, {useState , useEffect} from 'react'
import  Table from '../../shared/RegisterAttendance';
import axios from '../../../store/axios';
import {errorAlert} from '../../../utils'



function RegisterAttendance() {
    const [loading, setloading] = useState(false)
    const [staff, setstaff] = useState([])

  
    useEffect(() => {
        axios.get(`/teachers`).then(res => {
          let data = res.data.map(sta =>  {
            return {userID: sta.userID, name: sta.name, surname: sta.surname, status: false}
          })
          setstaff(data)
        })
    }, [])


    const handleRegisterAttendance = () => {
      setloading(true)
      axios.post('/attendance/register', {users: staff, classID: "staff",  role: "staff"}).then(res => {
        setloading(false)
        console.log(res)
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
               <h3 className="mb-3">Staff Attendance Register</h3>
              <Table  
                 attendanceData={staff} 
                 isStaff={true}
                 handleRegister={ handleRegisterAttendance }
                 loading={loading}
                 setattendanceData={setstaff}/>
        </div>
    )
}

export default RegisterAttendance
