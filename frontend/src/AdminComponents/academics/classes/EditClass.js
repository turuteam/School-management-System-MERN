import React, {useState, useEffect} from 'react'
import ClassForm from './ClassForm';
import axios from '../../../store/axios';
import {useParams, Link} from 'react-router-dom';
import {successAlert, errorAlert} from '../../../utils';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function EditClass() {
    const [name, setname] = useState("");
    const [campus, setcampus] = useState("");
    const [teacher, setteacher] = useState("");
    const [code, setcode] = useState("");
    const [loading, setloading] = useState(false);
    const {id} =  useParams();

    console.log(id);

    useEffect(() => {

         axios.get(`/classes/${id}`).then((res) => {
              if(res.data.error){
                  errorAlert(res.data.error);
                  return 0
              };
              let doc = res.data.docs;
              setname(doc?.name);
              setcampus(doc?.campusID);
              setteacher(doc?.teacherID);
              setcode(doc?.classCode)
         })
       
    }, [id])

    const handleEdit = () => {
        setloading(true)
        axios.put(`/classes/update/${id}`, { 
            name, 
            classCode: code,
            campusID: campus, 
            teacherID: teacher }).then(res => {
                if(res.data.error){
                    errorAlert(res.data.error);
                    setloading(false)
                    return 0;
                }
                successAlert("successfully edited");
                setloading(false)
            }).catch(() => {
                errorAlert("something went wrong")
            })
    }


    return (
        <>
         <div className="d-flex justify-content-end mb-5">
              <Link to="/academics/classes" className="link"> <ArrowBackIosIcon className="icon"/> Back  to Classes List</Link>
         </div>
        <div className="content__container">
           <h3>Edit Class</h3>
           <ClassForm  
            name={name} 
            handleAddClass={handleEdit}
            setname={setname} 
            campus={campus} 
            setcampus={setcampus}
            code={code}
            loading={loading}
            setcode={setcode} 
            teacher={teacher}
            isEdit= {true}
            setteacher={setteacher}/>
        </div>
        </>
    )
}

export default EditClass
