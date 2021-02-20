import React, {useState, useEffect} from 'react'
import Notice from './Notice'
import axios from '../../store/axios';

function NoticeBoard() {
    const [notices, setnotices] = useState([])

    useEffect(() => {
        axios.get('/notification').then(res => {
            setnotices(res.data);
        })
    }, [])
   
    return (
        <div className="content__container notices">
           <h3>Notice Board</h3>
           {notices.length > 0 ? <>{notices.map(notice => 
                <div  key={notice._id}>
                    <Notice  
                      description={notice?.message} 
                      date={notice?.date}
                      title={notice?.title}
                      id={notice?._id}
                      createdBy= {notice?.createdBy}
                      createdAt={notice?.createdAt}
                    />
                    <hr/>
                </div>
            )} </>
                : <h5 className="text-center my-3 text-danger">No Notice yet</h5>
           }
        
        </div>
    )
}

export default NoticeBoard
