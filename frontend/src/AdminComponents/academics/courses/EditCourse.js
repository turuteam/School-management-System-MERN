import React, {useState, useEffect} from 'react'
import EditForm from './CourseForm'
import axios from '../../../store/axios'
import {useParams} from 'react-router-dom'
import {errorAlert, successAlert} from '../../../utils'
import GoBack from '../../shared/GoBack'

function EditCourse() {
    const [name, setname] = useState("");
    const [code, setcode] = useState("");
    const [loading, setloading] = useState("");
    const [type, settype] = useState("");
    const [teacher, setteacher] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get(`/courses/${id}`).then(res=> {
             if(res.data.error){
                errorAlert(res.data.error);
                return 0
             }
             const {docs} = res.data;

             setname(docs?.name);
             settype(docs?.type);
             setteacher(docs?.teacher);
             setcode(docs?.code);
        })
    }, [id])

    const handleEdit = () => {
        setloading(true)
       axios.put(`/courses/update/${id}`, {name, code, type, teacher}).then(res => {
            if(res.data.error){
                errorAlert(res.data.error);
                return 0
            }
            successAlert("successfully edited")
            setloading(false)
       })
       .catch( () => {
           errorAlert("Something went wrong")
           setloading(false)
       })
    }
     


    return (
        <>
            <GoBack 
                link="/academics/courses" 
                name="Go back to Courses List" />
            <div className="content__container">
                <h3>Edit  Course</h3>
                <EditForm  
                type={type}
                settype={settype}
                setteacher={setteacher}
                teacher={teacher}
                onSubmit={handleEdit}
                name={name} 
                loading={loading}
                setname={setname} 
                code={code} 
                setcode={setcode} />
            </div>
        </>
    )
}

export default EditCourse
