import React, { useEffect, useState } from 'react'
import SidebarMessage from './SidebarMessage';
import axios from '../../../store/axios';
import {useSelector} from 'react-redux';
import {selectUser} from '../../../store/slices/userSlice'
//import {sortArray} from '../../../utils'

function Sidebar() {
    const [chats, setchats] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        axios.get(`/chats/chats/${user?.id}`).then(res => {
            setchats(res.data)
        })
    }, [user])

    console.log(chats.sort((x , y) => {
        return y.updatedAt - x.updatedAt
    }))

    return (
        <div className="sidebar">
             {chats &&  chats.sort((x , y) => {
                   return x.updatedAt - y.updatedAt
              }).map(chat =>  <SidebarMessage  
                    key={chat._id} 
                    chat={chat} 
                    currentUser={user?.id}
              />)}
        </div>
    )
}

export default Sidebar
