import React, {useState, useEffect} from 'react'
import CalenderTable from '../../shared/ListTable';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios'
import {useHistory} from 'react-router-dom';
import {errorAlert} from '../../../utils'


const tableHeadings = [
    {id: "resource", name: "Type"},
    {id: "title", name: "Event"},
    {id: "date", name: "Date"},
    {id: "start", name: "Starts"},
    {id: "end", name: "Ends"},
]


function Calender() {
    const [events, setevents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('/calendar').then(res => {
             let eventsData = res.data.map(e => {
                 return {
                     ...e,
                     start: e?.allDay ? "All day" : e?.start?.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                     end: e?.allDay ? "-":  e?.end?.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")
                 }
             })
              setevents(eventsData)
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
   
    ///academics/viewCalendar
    return (
        <div>
            <div className="row mb-5">
                 <div className="col">
                      <form>
                          <input type="text" className="form-control" placeholder="Search by name"/>
                      </form>
                 </div>
                 <div className="col">
                     <Link  to="/academics/calender/add" className="btn btn__lg blue__btn">Add New Event </Link>
                     <Link  to="/academics/viewCalendar" className="btn btn__lg blue__btn ml-2">View Calendar </Link>
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
