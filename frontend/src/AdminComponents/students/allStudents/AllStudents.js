import React, {useState, useEffect} from 'react'
import Search from '../../shared/Search'
import StudentsTable from '../../shared/TableListUsers';
import axios from '../../../store/axios'

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
   const [classID, setclass] = useState("")
   const [students, setstudents] = useState([])


  useEffect(() => {
      axios.get('/students').then(res => {
          setstudents(res.data)
      })
  }, [])

  
   const inputFields = [
    {
        type: "text",
        label: "",
        value: id,
        name: "Student ID",
        onChange: {setid}
    },
    {
     type: "text",
     label: "",
     value: name,
     name: "Name",
     onChange: {setname}
 },
   {
     type: "text",
     label: "",
     value: classID,
     name: "Class",
     onChange: {setclass}
   }
]
   

   const handleSearch = (e) => {
     e.preventDefault();
   }


  return (
    <div className="content__container">
      <Search
           title=""
           inputFields={inputFields}
        />
      <StudentsTable students={students}  headCells={headCells}/>
    </div>
  )
}

export default AllStudents
