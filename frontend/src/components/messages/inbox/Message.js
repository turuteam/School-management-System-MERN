import React from 'react'

function Message({sender}) {
    return (
        <div className={sender ? "sender__mesaage message" : "message"}>
            <div className="message__content">Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Laborum magni ea sunt
                 molestiae nihil deleniti quaerat id, doloribus
                  assumenda nemo!
            </div>
            <div className="message__time ">02/02/2021</div>
        </div>
    )
}

export default Message
