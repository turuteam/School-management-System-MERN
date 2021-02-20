import React, {useState} from 'react'
import  Table from '../../shared/RegisterAttendance';
import axios from '../../../store/axios';
import {errorAlert} from '../../../utils';
import {useSelector} from 'react-redux';
import {selectClasses} from '../../../store/slices/schoolSlice'



function RegisterAttendance() {
    const [classID, setclassID] = useState("");
    const [loading, setloading] = useState(false)
    const [students, setstudents] = useState([]);
    const classes = useSelector(selectClasses);
    
    const handleChange = (e) => {
        setclassID(e.target.value);
        axios.get(`/students/class/${e.target.value}`).then(res => {
          if(res.data.error){
            errorAlert(res.data.error)
          }
          let data = res.data.users?.map(student =>  {
            return {userID: student.userID, name: student.name, surname: student.surname, status: false}
          })
          setstudents(data)
        })

    }

    const handleRegisterAttendance = () => {
      setloading(true)
      axios.post('/attendance/register', {users: students, classID, role: "students"}).then(res => {
        setloading(false)
          if(res.data.error){
               errorAlert(res.data.error);
               return 0
          }
      }).catch(err => {
        setloading(false)
        errorAlert("Sorry something when wrong");

      })
       
    }


    return (
        <div>
          <h3>testing</h3>
          <div className="content__container mb-5">
              <h3>Register Today's Attendance</h3>
               <div>
                  <label >Search  Students in Class</label>
                  <select 
                    value={classID} 
                    name="class" 
                    onChange={handleChange}  
                    className="form-select form-select-sm py-2" 
                    >
                        <option hidden defaultValue>Select</option>
                        {classes.length > 0 ? 
                            classes.map(option => <option key={option.classCode} value={option.classCode}>{option.name}</option>) 
                            : <option disabled>No classes yet</option>
                        }
                  </select>
              </div>
          </div>
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
