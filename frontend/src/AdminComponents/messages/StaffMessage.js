import React, {useState, useEffect} from 'react'
import  SendToForm from '../../components/messages/SendToForm'
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice'

function StaffMessage() {
    const [message, setmessage] = useState("");
    const [recipientsOptions, setrecipientsOptions] = useState([]);
    const [recipient, setrecipient] = useState("");
    const sender = useSelector(selectUser);

    useEffect(() => {
        axios.get('/teachers').then(res =>{
            setrecipientsOptions(res.data.map(user => {
                return {
                    id: user.userID,
                    name: user.name,
                    surname: user.surname
                }
            }))
        })
    }, [])

    const onSend = (e) => {
        e.preventDefault()
         if(message && recipient){
             axios.post(`/chat/send/user/${sender?.id}/${recipient}`, {message, senderID: sender?.id}).then((res) => {
                 if(res.data.error){
                    errorAlert(res.data.error);
                    return 0
                 }
                 successAlert("message send");
                 setmessage("");
             })
         }
    }

    const searchOptions = () => {
        return recipientsOptions.map(option => <option key={option.id} value={option.id}>{option.name} {option.surname} {option.id} </option>)
     }
 


    return (
        <div>
            <SendToForm  
           message={message} 
           setmessage={setmessage} 
           onSend={onSend} 
           recipientsOptions={recipientsOptions} 
           recipient={recipient} 
           setrecipient={setrecipient} 
           sender={sender?.id} 
           searchOptions={searchOptions}
           sendto="Staff"/>
            
        </div>
    )
}

export default StaffMessage
