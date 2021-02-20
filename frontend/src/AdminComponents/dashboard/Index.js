import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import SchoolCalender from '../../components/dashboard/SchoolCalender'
import Population from './SchoolPopulation';
//import Attendance from './Attendance';
import NoticeBoard from '../../components/dashboard/NoticeBoard';
import AcademicYear from './AcademicYear'
import axios from '../../store/axios';

function Index() {
  const [count, setcount] = useState(0);
  const [events, setevents] = useState([])


  useEffect(() => {
    axios.get('/count').then(res => {
      if(res?.data){
        setcount(res.data)
      } 
  })
  }, [])

  useEffect(() => {
     axios.get('/calendar').then(res => {
       console.log(res.data)
       setevents(res.data)
     })
    
  }, [])


  return (
    <div>
         {/* cards */}
         <Cards counts={count}/>
         <div className="row mb-5">
            <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
              <SchoolCalender events={events}/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
              <NoticeBoard/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
              <Population femaleStudents={count?.femaleStudents} maleStudents={count?.maleStudents}/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
               <AcademicYear isEdit={true}/>
            </div>
          </div>
         
    </div>
  )
}

export default Index
