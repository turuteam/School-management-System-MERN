import React , {useState} from 'react'
import SendForm from '../../components/messages/SendToForm';
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils';
import {useSelector} from 'react-redux';
import {selectClasses} from '../../store/slices/schoolSlice';
import {selectUser} from '../../store/slices/userSlice'



function MessageStudent() {
    const [message, setmessage] = useState("");
    const [recipient, setrecipient] = useState("");
    const [ recipientOptions, setrecipientsOptions] = useState([])
    const sender = useSelector(selectUser);
    const classes  = useSelector(selectClasses);
    const [search, setsearch] = useState("");

    const handleSearchbyName = (e) => {
      e.preventDefault();
      axios.get(`/students/search/${search}`).then(res => {
          console.log(res.data)
          if(res.data.error){
              console.log("error");
              errorAlert(res.data.error);
              return 0
          }
          setrecipientsOptions(res.data.users.map(user => {
              return {
                  id: user.userID,
                  name: user.name,
                  surname: user.surname
              }
          }))
      })
  };

    const handleSearchbyClass = (e) => {
      axios.get(`/students/class/${e}`).then(res => {
          console.log(res.data)
          if(res.data.error){
              console.log("error");
              errorAlert(res.data.error);
              return 0
          }
          setrecipientsOptions(res.data.users.map(user => {
              return {
                  id: user.userID,
                  name: user.name,
                  surname: user.surname
              }
          }))
      })
  }

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

    return (
      <div>
      <div className="mb-5 content__container row">
      <h3>Select Student </h3>
      <form action="" onSubmit={handleSearchbyName} className="mb-5 col-md-6">
          <label  className="form-label">Search Student by Name or Student ID</label>
          <input value={search} onChange={e => setsearch(e.target.value)} className="form-control" type="text" placeholder="Type here..."/>  
      </form>
      <div className="col-md-5">
         <label  className="form-label">OR Select Student's Class</label>
          <select onChange={(e) => handleSearchbyClass(e.target.value)}  id="inputState" className="form-select">
              <option defaultValue hidden>Choose...</option>
               {classes.map(e => <option key={e._id} value={e._id}>{e.name}</option>)}
          </select>
      </div>
  </div>
         <SendForm 
            message={message} 
            setmessage={setmessage} 
            onSend={onSend} 
            recipientsOptions={recipientOptions} 
            recipient={recipient} 
            sendto="Teacher"
            setrecipient={setrecipient} 
            sender={sender}/> 
     </div>
    )
}

export default MessageStudent
