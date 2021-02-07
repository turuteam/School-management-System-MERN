import React, {useState, useEffect} from 'react'
import ClassTable from '../../shared/ListTable';
import Search from '../../shared/Search';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios';
import {useHistory} from 'react-router-dom';
import {errorAlert, successAlert} from '../../../utils'

const tableHeadings = [
    {id: "classCode", name: "ID"},
    {id: "name", name: "Class"},
    {id: "campusID", name: "Campus"},
    {id: "students", name: "Students"},
    {id: "teacherID", name: "Class Teacher"},
]

function Classes() {
    const [name, setname] = useState("");
    const [campus, setcampus] = useState("");
    const [teacher, setteacher] = useState("");
    const [classes, setclasses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('/classes').then(res =>{
            console.log(res.data);
            setclasses(res.data);
        })
    }, [])

    const inputFields = [
           {
               type: "text",
               label: "Search Name",
               value: name,
               name: "name",
               onChange: setname
           },
           {
            type: "text",
            label: "Search Campus",
            value: campus,
            name: "campus",
            onChange: setcampus
          },
          {
            type: "text",
            label: "Search Teacher",
            value: teacher,
            name: "teacher",
            onChange: setteacher
          }
    ]

    const handleDeleteClass = (id) => {
        const ans = window.confirm("are you sure you want to delete");
        if(ans){
           axios.delete(`/courses/delete/${id}`).then(res => {
               if(res.data.error){
                 errorAlert(res.data.error);
                 return 0;
               }
            //    successAlert("Deleted");
               setclasses(classes.filter(course => course._id !== id))  
           })
        }      
    }

    const handleEditClass = (id) => {
        history.push(`/academics/classes/edit/${id}`);
    }

    const handleSearch= (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-10">
                     <Search title="Classes List" inputFields={inputFields}/>
                </div>  
                <div className="col-xs-12 col-sm-4 col-md-2">
                    <Link  
                          to="/academics/classes/add" 
                          className="btn orange__btn btn__lg">
                          Add New Class
                    </Link>
                </div>
            </div>
           
             <ClassTable 
             handleEdit={handleEditClass} 
             handleSearch = {handleSearch}
             handleDelete={handleDeleteClass}  
             data={classes} tableHeader={tableHeadings}/>
        </div>
    )
}

export default Classes
