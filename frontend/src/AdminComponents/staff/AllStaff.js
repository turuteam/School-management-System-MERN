import React, {useState, useEffect} from 'react'
import Search from './SearchForm'
import StaffTable from '../shared/TableListUsers'
import axios from '../../store/axios'

const headCells = [
  { id: 'userID', numeric: false, disablePadding: false, label: 'Teacher ID' }, 
  { id: 'photoUrl', numeric: false, disablePadding: false, label: 'Photo' },
   { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
   { id: 'middlename', numeric: true, disablePadding:true, label: 'Middle Name' },
   { id: 'surname', numeric: true, disablePadding: true, label: 'Last Name' },
   { id: 'class', numeric: true, disablePadding: false, label: 'Class' },
   { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
   { id: 'telephone', numeric: true, disablePadding: false, label: 'telephone' },
   { id: 'Gender', numeric: true, disablePadding: false, label: 'Gender' },
 ];


function AllStaff() {
   const [searchItems, setsearchItems] = useState({
     name: "",
     userID: "",
     classID: "",
   })
   const [staff, setstaff] = useState([])


   useEffect(() => {
     axios.get('/teachers').then(res => {
         setstaff(res.data)
     })
    
   }, [])

   

   const handleSearch = (e) => {
     e.preventDefault();
   }

  return (
    <div className="content__container">
      <Search searchItems={searchItems} setsearchItems={setsearchItems} handleSearch={handleSearch}/>
      <StaffTable route="staff" students={staff}  headCells={headCells}/>
    </div>
  )
}

export default AllStaff
