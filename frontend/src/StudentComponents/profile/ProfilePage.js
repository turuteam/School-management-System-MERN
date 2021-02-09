import { Avatar } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import InfoTabs from '../../AdminComponents/students/studentDetails/StudentTabs'

function ProfilePage() {
    return (
        <div className="content__container"> 
           <h3>About Me</h3>
           <div className="row mb-5">
               <div className="col-xs-12 col-sm-6 col-md-4">
                   <Avatar alt="R"  src=""></Avatar>
               </div>
               <div className="col-xs-12 col-sm-6 col-md-8">
                   <h3>Student Name</h3>
                   <h6>Student ID</h6>
                    <div className="muted-text">Role</div>
                    <Link to={`/editProfile/123`} className="btn blue__btn sm__btn mt-4">Edit</Link>
               </div>
           </div>
            <div className="Profile Details">
                <InfoTabs/>      
           </div>
        </div>
    )
}

export default ProfilePage
