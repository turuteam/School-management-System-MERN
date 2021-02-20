import { useState } from "react"
import React  from 'react'
import ClassForm from './ClassForm';
import axios from '../../../store/axios'
import {errorAlert, successAlert} from '../../../utils'
import GoBack from '../../shared/GoBack'


function AddClass() {
    const [name, setname] = useState("");
    const [campus, setcampus] = useState("");
    const [teacher, setteacher] = useState("");
    const [code, setcode] = useState("");
    const [loading, setloading] = useState(false);
    const [academic, setacademic] = useState("")

    const handleAddClass = () => {
        setloading(true)
        axios.post('/classes/create', 
        {
            classCode: code, 
            name, 
            campusID: campus, 
            teacherID: teacher,
            academic
        }).then(res => {
            let {data} = res;
            if(data?.error){
                errorAlert(data.error);
                return 0
            }
            successAlert(`${data.doc?.classCode} is successfully added`)
            setloading(false);
            setcampus("");
            setcode("");
            setname("");
            setacademic("");
            setteacher("");

        }).catch((e) => {
               errorAlert("something when wrong");
               setloading(false)
        })
    }

    return (
        <>
        <GoBack link="/academics/classes" name="Back  to Classes List"/>
        <div className="content__container">
            <h3>Add Class</h3>
            <ClassForm  
            name={name} 
            setname={setname} 
            campus={campus} 
            setcampus={setcampus}
            code={code}
            academic={academic}
            setacademic={setacademic}
            loading={loading}
            setcode={setcode} 
            teacher={teacher}
            handleAddClass={handleAddClass}
            setteacher={setteacher}/>
             
        </div>
        </>
    )
}

export default AddClass
