import React , {useEffect, useState} from 'react'
import ClassCard from './ClassCard'
import {selectUser} from '../../store/slices/userSlice';
import {useSelector} from 'react-redux';
import axios from '../../store/axios'

function CoursesPage() {
    const [courses, setcourses] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        axios.get(`/student/courses/${user?.id}`).then(res => {
            if(res.data.success){
                setcourses(res.data.courses)
            }
        })
       
    }, [user])


    return (
         <div>
            <h3>My Courses</h3>
            <div className="row mt-5">
                {courses.length > 0 ?  courses.map(e =>  <ClassCard key={e.couserID} id={e.courseID}/>) :  <ClassCard />}
            </div>
        </div>
    )
}

export default CoursesPage
