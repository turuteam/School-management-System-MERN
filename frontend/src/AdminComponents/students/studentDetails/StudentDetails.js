import React, {useEffect, useState} from 'react';
import StudentInfo from '../../../components/userInfoTabs/UserInfo';
import StudentTabs from '../../../components/userInfoTabs/StudentTabs'
import axios from '../../../store/axios';
import { useParams} from 'react-router-dom'

function StudentDetails() {
    const [details, setdetails] = useState({});

    const {id} =useParams()

    useEffect(() => {
        axios.get(`/students/student/${id}`).then(res => {
            console.log(res)
             if(res.data.error){
                 console.log(res.data.error);
                 return 0
             }
             setdetails(res.data.student)
        })
       
    }, [id])

    console.log(details, "details")


    return (
        <div className="student__details">
            <h3>Student Details</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <StudentInfo 
                    name={details?.name} 
                    surname={details?.surname} 
                    middleName={details?.middleName} 
                    role={details?.role} 
                    id={details?.userID}/>   
                </div>
                <div className="col-xs-12 col-sm-6 col-md-8">
                    <StudentTabs user={details}/>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails
