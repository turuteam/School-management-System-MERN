import React, {useState} from 'react';
import SendForm  from '../../components/messages/SendToForm';
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils';
import {useSelector} from 'react-redux';

import {selectUser} from '../../store/slices/userSlice'



function BulkMessage() {
    const [message, setmessage] = useState("");
    const [recipient, setrecipient] = useState("");
    const sender = useSelector(selectUser);
    const [loading, setloading] = useState(false)

    const recipientsOptions = [
        {id: "students", name: "All Students"},
        {id: "parents", name: "All Parents"},
        {id: "staff", name: "All Staff"}
    ]

    const searchOptions = () => {
        return recipientsOptions.map(option => 
        <option 
          key={option.id} 
          value={option.id}>
            {option.name} 
        </option>)
     }

     const handleSend =  (async (e) => {
         e.preventDefault();

        if(message && recipient){
            setloading(true)
            switch (recipient) {
                case "staff":
                    return await  axios.get('/teachers').then(res => {
                         let staff = res.data;
                         staff.map( async(e) => 
                           await axios.post(`/chat/send/user/${sender?.id}/${e?.userID}`, {message, senderID: sender?.id})
                            .then((response) => {
                                setloading(false)
                                if(response.data.error){
                                   errorAlert(response.data.error);
                                   return 0
                                }
                                successAlert("message send to all staff members");
                                setmessage("");
                            })
                         )
                    })
                case "students":
                    return await  axios.get('/students').then(res => {
                           let students = res.data;
                           students.map(async re => 
                            await axios.post(`/chat/send/user/${sender?.id}/${re?.userID}`, {message, senderID: sender?.id})
                            .then((response) => {
                                setloading(false)
                                if(response.data.error){
                                   errorAlert(response.data.error);
                                   return 0
                                }
                                successAlert("message send to all students");
                                setmessage("");
                            })
                         )    
                      })
                case "parents":
                    return  await axios.get('/students /parents').then(res => {
                        let parents = res.data.docs;
                        parents.map(async i =>  
                            await axios.post(`/chat/send/user/${sender?.id}/${i?._id}`, {message, senderID: sender?.id})
                            .then((response) => {
                                setloading(false)
                                if(response.data.error){
                                   errorAlert(response.data.error);
                                   return 0
                                }
                                successAlert("message send to all parents");
                                setmessage("");
                            })
                        )
                    })
                default:
                    break;
            }
        }
     })


    return (
        <div>
            <SendForm 
                message={message} 
                setmessage={setmessage} 
                onSend={handleSend} 
                recipientsOptions={recipientsOptions} 
                recipient={recipient} 
                setrecipient={setrecipient} 
                sender={sender?.id} 
                loading={loading}
                searchOptions={searchOptions}
                sendto="All"
            />
    </div>
    )
}

export default BulkMessage
