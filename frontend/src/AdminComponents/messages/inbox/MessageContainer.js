import React from 'react'
import Message from './Message'

function MessageContainer(props) {
    console.log(props)
    return (
        <div className="message__container">
            <div className="header">
               <h6> Recipient Name</h6>
               <span>Role</span>
            </div>
            <div className="message__messages">
                  <Message  sender={true}/>
                  <Message />
                  <Message  sender={true}/>
                  <Message />
            </div>
            <form className="send">
                <input type="text" placeholder="Type here ..."/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default MessageContainer
