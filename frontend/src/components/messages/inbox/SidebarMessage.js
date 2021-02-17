import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import axios from '../../../store/axios'
import {getIntial, getImgSrc, getCapitalize, timeStamp, getTrimString} from '../../../utils'

function SidebarMessage({chat, currentUser}) {
    const [user, setuser] = useState({});
    const [lastmessage, setlastmessage] = useState({})

    useEffect(() => {
        let userId = currentUser === chat?.requestor_id ?  chat?.acceptor_id : chat?.requestor_id;
        axios.get(`/user/${userId.trim()}`).then(res => {
            let data = res.data.user
            setuser({
                profileUrl : data.profileUrl,
                name: data.name,
                surname: data.surname,
            });
            setlastmessage(chat?.messages.pop())
        })
        
    }, [chat, currentUser])

    return (
        <div className="sidemessage">
           <Link to={`/message/${chat?._id}`}  className="d-flex">
               <div className="mr-2">
                 <Avatar alt={getIntial(user?.name || "O")} src={getImgSrc(user?.profileUrl)}></Avatar>
               </div>
               <div>
                 <div className="d-flex align-center">
                     <h6>{getCapitalize(user?.name)} { getTrimString(getCapitalize(user?.surname), 5)}</h6>
                     <small className="text-muted">{timeStamp(lastmessage?.date)}</small>
                 </div>
                 <span>{ getTrimString(lastmessage?.message || "last message...", 20)}</span>
              </div>
           </Link>
        </div> 
    )
}

export default SidebarMessage
