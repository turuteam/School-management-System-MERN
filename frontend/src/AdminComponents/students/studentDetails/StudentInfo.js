import React from 'react'
import {Avatar} from '@material-ui/core'

function StudentInfo() {
    return (
        <div className="content__container student__info">
            <Avatar className="avatar" src="" alt="R"/>
            <h5>Student Name</h5>
             <h6>BK20211</h6>
            <div className="text-muted">Student role</div>
            <button className="btn blue__btn sm__btn mt-4">Edit</button>
        </div>
    )
}

export default StudentInfo
