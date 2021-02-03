import React from 'react'
import moment from 'moment'
import Chip from '@material-ui/core/Chip';

function Notice({message, sender, date}) {
    return (
        <div className="notice">
            <Chip className="chip__date" label={moment(date).format(' Do MMMM, YYYY')} />
            <h5><strong>{message}</strong></h5>
            <div>
                <h6>{sender} / <span className="text-muted"> {moment(date).fromNow()}</span></h6>
            </div>
        </div>
    )
}

export default Notice
