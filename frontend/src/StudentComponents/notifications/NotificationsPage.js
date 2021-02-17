import React, { useState } from 'react'
import Search from '../../AdminComponents/shared/Search';
import Notice from '../../components/dashboard/Notice';
import Divider from '@material-ui/core/Divider';

function NotificationsPage() {
    const [date, setdate] = useState("");
    const [title, settitle] = useState("")
    const [notices, setnotices] = useState([
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f8", 
        },
        {
            message: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero necessitatibus totam, obcaecati excepturi nostrum inventore ea dolor quae nulla rerum ipsam soluta veritatis minima assumenda cupiditate corporis sapiente unde tenetur vel iure commodi. Porro cumque tempora enim nam nesciunt ipsam doloribus esse, eius blanditiis iste impedit beatae tenetur magnam quisquam?",
            sender: "admin",
            title: "Great School manag meneesom.",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f9", 
        },
        {
            message: "Great School manag meneesom.",
            sender: "admin",
            date: "2021-02-01T12:52:18.125Z",
            _id: "6017f98273029d53819683f0", 
        },
    ])

    const inputFields = [
        {
            type: "text",
            value: date,
            name: "date",
            onChange: setdate
        },
        {
            type: "text",
            value: title,
            name: "title",
            onChange: settitle
        },
    ]
   

    const handleSearch = () => {
        console.log("clicked")
    }
    return (
        <div className="content__container notices">
            <h3>Notice Board</h3>
            <Search  inputFields={inputFields}  handleSearch={handleSearch}/>
            {notices && notices.map(notice => 
           <div className=""  key={notice._id}>
            <Notice  
             message={notice.message} 
             date={notice.date}
             title={notice.title}
             id={notice._id}
             isReset={true}
             sender={notice.sender}
             />
              <Divider variant="middle" />
            </div>
           )}
        </div>
    )
}

export default NotificationsPage
