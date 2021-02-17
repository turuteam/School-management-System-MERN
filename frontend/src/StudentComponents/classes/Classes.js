import React, { useEffect, useState } from 'react'
import {selectUser} from '../../store/slices/userSlice';
import {useSelector} from 'react-redux'
import axios from '../../store/axios';

function Classes() {
     const user = useSelector(selectUser);
     const [classDetails, setclassDetails] = useState({})
     const [isClass, setisClass] = useState(null)

     useEffect(() => {
          axios.get(`/student/classDetails/${user?.id}`).then(response => {
               if(response.data.success){
                    setisClass(true);
                    setclassDetails(response.data.docs);
               }
               else{
                  setisClass(false)
                  console.log("ERROR", response.data);
               }
          })
     }, [user])

     console.log(classDetails)
    return (
        <div>
            <div className="content__container">
               <h3>Class Details</h3>
               {isClass ?  <> 
                <div className="row mb-3">
                    <div className="col-4">
                         Class
                    </div>
                    <div className="col-8">
                         {classDetails?.name || "N/A"}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                         Code
                    </div>
                    <div className="col-8">
                        {classDetails?.classCode || "N/A"}
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-4">
                        {classDetails?.campusID || "N/A"}
                    </div>
                    <div className="col-8">
                         class Code
                    </div>
                </div>
                <div className="row mb-3">
                    
                    <div className="col-4">
                         Class Teacher
                    </div>
                    <div className="col-8">
                         {classDetails?.teacherID || "N/A"}
                    </div>
                </div>

                </> :  <div>No Class Details yet </div>}
            </div>
        </div>
    )
}

export default Classes

