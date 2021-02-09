import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {Link} from 'react-router-dom'

function ClassCard() {
    return (
        <div className=" col-xs-12 col-sm-6 com-md-4 mb-5">
            <div  className="classCard">
                <Link to={`/`}>
                    <ImportContactsIcon className="icon"/>
                    <h5>Class Name</h5>
                    <span>classcode</span>
                </Link>   
            </div>
        </div>
    )
}

export default ClassCard
