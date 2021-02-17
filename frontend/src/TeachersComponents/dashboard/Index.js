import React from 'react'
import Cards from '../../components/dashboard/Card';
import NoticeBoard from '../../components/dashboard/NoticeBoard'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SchoolCalender from '../../components/dashboard/SchoolCalender'
import ClassIcon from '@material-ui/icons/Class';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallToActionIcon from '@material-ui/icons/CallToAction';

function Index() {
    return (
        <div className="teacher__dashboard">
             <div className="row">
                <Cards icon={<ClassIcon/>} title="Classes" value={8} link={"/academics/classes"}/>
                <Cards icon={<PeopleAltIcon/>} title="Courses" value={8}  link={"/academics/courses"}/>
                <Cards icon={<NotificationsActiveIcon/>} title="Notifications" value={8} link={"/notifications"}/>
                <Cards icon={<CalendarTodayIcon/>} title="Events" value={8}/>
                <Cards icon={<CallToActionIcon/>} title="Attendance" value={98 + "%"}/>
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
