import React, {useState, useEffect} from 'react'
import CourseTable from '../../shared/ListTable';
import Search from '../../shared/Search';
import {Link, useHistory} from 'react-router-dom'
import axios from '../../../store/axios';
import {errorAlert, successAlert} from '../../../utils'


const tableHeadings = [
    {id: "code", name: "ID"},
    {id: "name", name: "Course"},
    {id: "type", name: "Course Type"},
    {id: "teacher", name: "Teacher"},
]


function Courses() {
    const [name, setname] = useState("")
    const [depart, setdepart] = useState("")
    const [teacher, setteacher] = useState("")
    const [courses, setcourses] = useState([])
    const history = useHistory();
    const [loading, setloading] = useState(false)


    useEffect(() => {
        setloading(true)
        axios.get('/courses').then(res =>{
            console.log(res.data);
            setcourses(res.data);
            setloading(false);
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
            label: "Search Type",
            value: depart,
            name: "type",
            onChange: setdepart
        },
          {
            type: "text",
            label: "Search Teacher",
            value: teacher,
            name: "teacher",
            onChange: setteacher
          }
    ];


    const handleDelete = (id) => {
       const ans = window.confirm("are you sure you want to delete");
       if(ans){
          axios.delete(`/courses/delete/${id}`).then(res => {
              if(res.data.error){
                errorAlert(res.data.error);
                return 0;
              }
            //   successAlert("Deleted");
              setcourses(courses.filter(course => course._id !== id))  
          })
       }      
    }
    const handleEdit = (id) => {
        history.push(`/academics/courses/edit/${id}`)
           
     }

     const handleSearch = (e) => {
         e.preventDefault();
         if(teacher !== "" || name !== "" || depart !== ""){
             return 0
         }
         axios.get(`/courses/${teacher}/${name}/${depart}`).then(res => {
             console.log(res.data)
         })
     }
   
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-10">
                     <Search title="Courses List" inputFields={inputFields}/>
                </div>  
                <div className="col-xs-12 col-sm-4 col-md-2">
                    <Link to={`/academics/courses/add`} 
                    className="btn orange__btn btn__lg">
                        Add New Course
                    </Link>
                </div>
            </div>
           
             <CourseTable  
                handleEdit={handleEdit}
                handleDelete={handleDelete}  
                data={courses} 
                loading={loading}
                handleSearch={handleSearch}
                tableHeader={tableHeadings}/>
        </div>
    )
}

export default Courses
