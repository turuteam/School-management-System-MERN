import React, {useState, useEffect} from 'react'
import Search from '../../shared/Search'
import StudentsTable from '../../shared/TableListUsers';
import axios from '../../../store/axios'
import {selectClasses} from '../../../store/slices/schoolSlice';
import {useSelector} from 'react-redux'
import {errorAlert} from '../../../utils'


const headCells = [
  { id: 'userID', numeric: false, disablePadding: false, label: 'StudentID' }, 
  { id: 'photoUrl', numeric: false, disablePadding: false, label: 'Photo' },
   { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
   { id: 'middlename', numeric: true, disablePadding:true, label: 'Middle Name' },
   { id: 'surname', numeric: true, disablePadding: true, label: 'Last Name' },
   { id: 'class', numeric: true, disablePadding: false, label: 'Class' },
   { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
   { id: 'telephone', numeric: true, disablePadding: false, label: 'telephone' },
   { id: 'Gender', numeric: true, disablePadding: false, label: 'Gender' },
 ];


function AllStudents() {
   const [name, setname] = useState("");
   const [id, setid] = useState("");
   const [classID, setclass] = useState("");
   const [students, setstudents] = useState([]);
   const classes = useSelector(selectClasses)

   const classesOptions = classes.map(e => {
     return {
       name: e.name,
       id: e.classCode
     }
   })

  useEffect(() => {
      axios.get('/students').then(res => {
        console.log(res.data);
          setstudents(res.data)
      })
  }, [])

  const handleReset = ( e) => {
       e.preventDefault();
       setname("");
       setid("");
       setclass("")
  }
  
   const inputFields = [
    {
        type: "text",
        label: "",
        value: id,
        name: "Student ID",
        onChange: setid
    },
    {
     type: "text",
     label: "",
     value: name,
     name: "Name",
     onChange: setname
 },
   {
     type: "select",
     options: classesOptions,
     label: "",
     value: classID,
     name: "Class",
     onChange: setclass
   }
]
   

   const handleSearch = (e) => {
     e.preventDefault();
     axios.get(`/students/search/${id}/${name}/${classID}`).then(res => {
         console.log(res.data);
     })
   }

   const handleDelete = (i) => {
    let ans = window.confirm(`Are sure you want to delete user ${i}`);
    if(ans){
     axios.delete(`/user/delete/${i}`).then(res => {
       if(res.data.error){
          errorAlert(res.data.error)
       }
       setstudents(students.filter(i => i.userID !== id))
     })
    }
      
  }


  return (
    <div className="content__container">
       <Search
           title=""
           handleReset={ handleReset}
           handleSearch={handleSearch}
           inputFields={inputFields}
        />
      <StudentsTable 
      route="students" 
      handleDelete={handleDelete}
      students={students}  
      headCells={headCells}/>
    </div>
  )
}

export default AllStudents
