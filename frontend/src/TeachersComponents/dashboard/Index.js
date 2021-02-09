import React from 'react'
import Cards from '../../components/dashboard/Card';
import NoticeBoard from '../../components/dashboard/NoticeBoard'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SchoolCalender from '../../components/dashboard/SchoolCalender'

function Index() {
    return (
        <div className="teacher__dashboard">
             <div className="row">
                <Cards icon={<PeopleAltIcon/>} title="Classes" value={8}/>
                <Cards icon={<PeopleAltIcon/>} title="Subjects" value={8}/>
                <Cards icon={<PeopleAltIcon/>} title="Notifications" value={8}/>
                <Cards icon={<PeopleAltIcon/>} title="Events" value={8}/>
                <Cards icon={<PeopleAltIcon/>} title="Attendance" value={98 + "%"}/>
            </div>
            <div className="row mb-5">
                <div className="col-xs-12 col-sm-12 col-md-6">
                <SchoolCalender/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                <NoticeBoard/>
            </div>
         </div>
           
        </div>
    )
}

export default Index
