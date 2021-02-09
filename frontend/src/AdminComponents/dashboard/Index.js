import React from 'react'
import Cards from './Cards';
import SchoolCalender from '../../components/dashboard/SchoolCalender'
import Expenses from './SchoolPopulation';
import Earning from './Attendance';
import NoticeBoard from '../../components/dashboard/NoticeBoard'


function Index() {
  return (
    <div>
         {/* cards */}
         <Cards/>

         <div className="row mb-5">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <SchoolCalender/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <NoticeBoard/>
            </div>
         </div>
         <div className="row mb-5">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <Earning/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <Expenses/>
            </div>
         </div>
         
    </div>
  )
}

export default Index
