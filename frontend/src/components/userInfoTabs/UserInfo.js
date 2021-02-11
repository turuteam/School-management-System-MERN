import React from 'react'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {getCapitalize, getIntial} from '../../utils'


function StudentInfo({id, name, surname, middleName, role , route}) {
    return (
        <div className="content__container student__info">
            <Avatar className="avatar" src="" alt="R"/>
            <h5>{getCapitalize(name || "")} {middleName && getIntial(middleName)}  {getCapitalize(surname || "")}</h5>
             <h6>{id}</h6>
            <div className="text-muted">{role}</div>
            <Link to={`/${route}/edit/${id}`} className="btn blue__btn sm__btn mt-4">Edit</Link>
        </div>
    )
}

export default StudentInfo
