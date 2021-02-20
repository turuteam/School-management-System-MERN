import React, { useState, useEffect } from 'react'
import Cards from '../../components/dashboard/Card';
import NoticeBoard from '../../components/dashboard/NoticeBoard'
import SchoolCalender from '../../components/dashboard/SchoolCalender'
import ClassIcon from '@material-ui/icons/Class';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import axios from '../../store/axios';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AcademicYear from '../../AdminComponents/dashboard/AcademicYear'

function Index() {
    const user = useSelector(selectUser)
    const [count, setcount] = useState({

    })

    useEffect(() => {
        axios.get(`/staff/count/${user?.id}`).then(res => {
            console.log(res.data)
            setcount(res.data.count);
        });
    }, [user])

    let attendancePercentage = (count?.attendance / 30) * 100

    return (
        <div className="teacher__dashboard">
             <div className="row">
                <Cards icon={<ClassIcon/>} title="Classes" value={count?.classes} link={"/academics/classes"}/>
                <Cards icon={<ImportContactsIcon/>} title="Courses" value={count?.courses}  link={"/academics/courses"}/>
                <Cards icon={<NotificationsActiveIcon/>} title="Notifications" value={count?.notifications} link={"/notifications"}/>
                <Cards icon={<CalendarTodayIcon/>} title="Events" value={count?.events} link="/"/>
                <Cards icon={<CallToActionIcon/>} title="Attendance" value={attendancePercentage.toFixed(2) + "%"} link="/attendance"/>
            </div>
            <div className="row mb-5">
                <div className="col-xs-12 col-sm-12 col-md-6">
                   <SchoolCalender/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <NoticeBoard/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <AcademicYear/>
                </div>
         </div>
           
        </div>
    )
}

export default Index
