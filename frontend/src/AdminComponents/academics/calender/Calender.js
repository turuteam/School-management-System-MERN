import React, {useState, useEffect} from 'react'
import CalenderTable from '../../shared/ListTable';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios'
import {useHistory} from 'react-router-dom';
import {errorAlert} from '../../../utils'


const tableHeadings = [
    {id: "resourse", name: "Type"},
    {id: "title", name: "Event"},
    {id: "start", name: "Starts"},
    {id: "end", name: "Ends"},
]


function Calender() {
    const [events, setevents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('/calendar').then(res => {
              setevents(res.data)
        })
       
    }, [])
   
    const handleDelete = (id) => {
        axios.delete(`/calendar/delete/${id}`).then(res => {
            if(res.data.error){
                 errorAlert(res.data.error);
                 return 0;
            }
            setevents(events.filter(event => event._id !== id))
        })

    }

    const handleEdit = (id) => {
        history.push(`/academics/calender/edit/${id}`)
    }
   
    return (
        <div>
            <div className="row mb-5">
                 <div className="col">
                      <form>
                          <input type="text" className="form-control" placeholder="Search"/>
                      </form>
                 </div>
                 <div className="col">
                     <Link  to="/academics/calender/add" className="btn btn__lg blue__btn">Add New Event </Link>
                 </div>
            </div>
            <CalenderTable 
            data={events} 
            handleDelete={ handleDelete}
            handleEdit={handleEdit}
            tableHeader={tableHeadings}/>
        </div>
    )
}

export default Calender
