import React, {useState, useEffect} from 'react'
import Search from './SearchForm'
import StaffTable from '../shared/TableListUsers'
import axios from '../../store/axios'
import {errorAlert} from '../../utils';
import Loading from '../../Loading'

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
   const [loading, setloading] = useState(false)


   useEffect(() => {
     setloading(true)
     axios.get('/teachers').then(res => {
         setloading(false)
         setstaff(res.data)
     })
    
   }, [])

   const handleDelete = (id) => {
     let ans = window.confirm(`Are sure you want to delete user ${id}`);
     if(ans){
      axios.delete(`/user/delete/${id}`).then(res => {
        if(res.data.error){
           errorAlert(res.data.error)
        }
        setstaff(staff.filter(i => i.userID !== id))
      })
     }
       
   }

   const handleSearch = (e) => {
     e.preventDefault();
   }

  return (
    <>
    {loading ? 
        <Loading/> :
        <div className="content__container">
          <Search searchItems={searchItems} setsearchItems={setsearchItems} handleSearch={handleSearch}/>
          <StaffTable 
          route="staff" 
          loading={loading}
          students={staff} 
          handleDelete={handleDelete} 
          headCells={headCells}/>
        </div>
     }
    </>
  )
}

export default AllStaff
