import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from '../containers/index'
import { useSelector} from 'react-redux';
import {selectUser} from '../store/slices/userSlice';
import StudentRoutes from './Student/studentRoutes';
import TeacherRoutes from './Teacher/teacherRoutes';
import AdminRoutes from './Admin/adminRoutes';
import StudentNavs from './Student/sidebarNavs';
import TeacherNavs from './Teacher/sidebarNavs';
import AdminNavs from './Admin/sidebarNavs';

const TheLayout = () => {
    const user = useSelector(selectUser);
    
    const getRoutes = () => {
        if(user){
            switch (user.role) {
                case "student":
                    return StudentRoutes
                case "teacher": 
                    return TeacherRoutes
                 case "admin":  
                     return AdminRoutes  
                default:
                    break;
            }
        }  
        return  [] 
    }
    const getNavs = () => {
        if(user){
            switch (user.role) {
                case "student":
                    return StudentNavs
                case "teacher": 
                    return TeacherNavs
                 case "admin":  
                     return AdminNavs  
                default:
                    break;
            }
        }
        return  [] 
    }

  return (
    <div className="c-app c-default-layout">
      <TheSidebar navs={getNavs()}/>
      <div className="c-wrapper">
        <TheHeader routes={getRoutes()}/>
        <div className="c-body">
          <TheContent path={user?.role} routes={getRoutes()}/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
