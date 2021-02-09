import React from 'react'
import Notice from './Notice'
import Divider from '@material-ui/core/Divider';

function NoticeBoard() {
    const notices = [
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f8", 
        },
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f9", 
        },
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f0", 
        },
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f1", 
        }
    ]
    return (
        <div className="content__container notices">
           <h3>Notice Board</h3>
           {notices && notices.map(notice => 
           <div  key={notice._id}>
            <Notice  
             message={notice.message} 
             date={notice.date}
             id={notice._id}
             sender={notice.sender}
             />
              <Divider variant="middle" />
            </div>
           )}
        
        </div>
    )
}

export default NoticeBoard
