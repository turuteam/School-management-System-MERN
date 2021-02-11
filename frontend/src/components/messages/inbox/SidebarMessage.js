import React from 'react'
import {Link} from 'react-router-dom'

function SidebarMessage() {
    return (
        <div className="sidemessage">
           <Link to={`/message/123`} >
             <div>
                 <h6>Recipient</h6>
                 <span>30-Jan-2021 08:07:56</span>
             </div>
           </Link>
        </div> 
    )
}

export default SidebarMessage
