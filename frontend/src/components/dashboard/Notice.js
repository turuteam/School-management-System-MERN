import React from 'react'
import moment from 'moment'
import Chip from '@material-ui/core/Chip';

function Notice({message, sender, date, title}) {

    const colors = ["#2ad7c5", "#ffa201", "#f939a1"];

    let bgColor = colors[Math.floor(Math.random() * colors.length)]

    return (
        <div className="notice">
            <Chip style={{backgroundColor: `${bgColor}`}} className="chip__date mb-2" label={moment(date).format(' Do MMMM, YYYY')} />
            <h5><strong>{title}</strong></h5>
            <p>{message}</p>
            <div>
                <h6>{sender} / <span className="text-muted"> {moment(date).fromNow()}</span></h6>
            </div>
        </div>
    )
}

export default Notice
