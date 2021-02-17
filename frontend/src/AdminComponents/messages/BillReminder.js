import React, {useState} from 'react'
import  SendToForm from '../../components/messages/SendToForm'
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils';
import {useSelector} from 'react-redux';
import {selectClasses} from '../../store/slices/schoolSlice';
import {selectUser} from '../../store/slices/userSlice'

function BillReminder() {
    const [message, setmessage] = useState("");
    const [recipientsOptions, setrecipientsOptions] = useState([]);
    const [recipient, setrecipient] = useState("");
    const sender = useSelector(selectUser);

    const options = [
       {id: "fees", name: "Fees Debtors"},
       { id: "canteen", name: "Canteen debtors"}
    ]

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
        return options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)
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
           sendto="Bill Reminder"/>
        </div>
    )
}

export default BillReminder
