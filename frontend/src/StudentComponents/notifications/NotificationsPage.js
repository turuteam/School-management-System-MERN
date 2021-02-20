import React, { useState, useEffect } from 'react'
import Search from '../../AdminComponents/shared/Search';
import Notice from '../../components/dashboard/Notice';
import axios from '../../store/axios'

function NotificationsPage() {
    const [date, setdate] = useState("");
    const [title, settitle] = useState("")
    const [notices, setnotices] = useState([])

    useEffect(() => {
        axios.get('/notification').then(res => {
            setnotices(res.data);
            console.log(res.data)
        })
       
    }, [])

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
        <div className=" notices">
            <div className="mb-5 content__container">
                 <h3>Notice Board</h3>
                 <Search  inputFields={inputFields}  handleSearch={handleSearch}/>
            </div>
            <div className="notices__container content__container">
                {notices.length > 0 ? notices.map(notice => 
                    <div className=""  key={notice._id}>
                        <Notice  
                        description={notice.message} 
                        date={notice.date}
                        title={notice.title}
                        id={notice._id}
                        isReset={true}
                        createdAt={notice?.createdAt}
                        createdBy={notice.sender}
                        />
                        <hr/>
                    </div>
                ) :
                 <>
                   <h6 className="text-danger text-center">
                       There are no notice at the moment
                   </h6>
                </> }
            </div>
            
           
        </div>
    )
}

export default NotificationsPage
