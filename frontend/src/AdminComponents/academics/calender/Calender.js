import React from 'react'
import CalenderTable from '../../shared/ListTable';



function Calender() {
    const calenderData = [
        {id: "a1", event: "Maths", start: "Science",end: "TK20213"},
        {id: "a2", event: "Geo", start: "Arts",end: "TK20213"},
        {id: "a3", event: "History", start: "Arts",end: "TK20213"},
        {id: "a4", event: "Science", start: "Science",end:  "TK20213"},
        {id: "a5", event: "Accounts", start: "Commercials",end:  "TK20213"},
        {id: "a6", event: "English", start: "Languages",end:  "TK20213"},

    ]
    const tableHeadings = [
        {id: "id", name: "ID"},
        {id: "event", name: "Event"},
        {id: "start", name: "Starts"},
        {id: "end", name: "Ends"},
    ]
    return (
        <div>
            <div className="row mb-5">
                 <div className="col">
                      <form>
                          <input type="text" className="form-control" placeholder="Search"/>
                      </form>
                 </div>
                 <div className="col">
                     <button className="btn btn__lg blue__btn">Add New Event</button>
                 </div>
            </div>
            <CalenderTable data={calenderData} tableHeader={tableHeadings}/>
        </div>
    )
}

export default Calender
