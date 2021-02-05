import React from 'react'
import {Avatar} from '@material-ui/core'
import {Link, useParams} from 'react-router-dom'


function StudentInfo() {
    const {id} =useParams()
    console.log(id)
    return (
        <div className="content__container student__info">
            <Avatar className="avatar" src="" alt="R"/>
            <h5>Student Name</h5>
             <h6>BK20211</h6>
            <div className="text-muted">Student role</div>
            <Link to={`/students/edit/${id}`} className="btn blue__btn sm__btn mt-4">Edit</Link>
        </div>
    )
}

export default StudentInfo
