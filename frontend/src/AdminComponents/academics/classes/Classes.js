import React, {useState} from 'react'
import ClassTable from '../../shared/ListTable';
import Search from '../../shared/Search';
import {Link} from 'react-router-dom'

function Classes() {
    const [name, setname] = useState("")
    const [campus, setcampus] = useState("")
    const [teacher, setteacher] = useState("")

    let title = "Classes List"
    const inputFields = [
           {
               type: "text",
               label: "Search Name",
               value: name,
               name: "name",
               onChange: setname
           },
           {
            type: "text",
            label: "Search Campus",
            value: campus,
            name: "campus",
            onChange: setcampus
          },
          {
            type: "text",
            label: "Search Teacher",
            value: teacher,
            name: "teacher",
            onChange: setteacher
          }
    ]

    const classesData = [
        {id: "a1", name: "Class 1", campus: "Main Campus", students: "10", classTK: "TK20213"},
        {id: "a2", name: "Class 1", campus: "Main Campus", students: "25", classTK: "TK20213"},
        {id: "a3", name: "Class 1", campus: "Campus 3", students: "16", classTK: "TK20213"},
        {id: "a4", name: "Class 4", campus: "Campus 1", students: "17", classTK: "TK20213"},
        {id: "a5", name: "Class 5", campus: "Campus 5", students: "13", classTK: "TK20213"},
        {id: "a6", name: "Class 6", campus: "Campus 2", students: "30", classTK: "TK20213"},

    ]
    const tableHeadings = [
        {id: "id", name: "ID"},
        {id: "name", name: "Class"},
        {id: "campus", name: "Campus"},
        {id: "students", name: "Students"},
        {id: "classTK", name: "Class Teacher"},
    ]
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-10">
                     <Search title={title} inputFields={inputFields}/>
                </div>  
                <div className="col-xs-12 col-sm-4 col-md-2">
                    <Link to="/academics/classes/add" className="btn orange__btn btn__lg">Add New Class</Link>
                </div>
            </div>
           
             <ClassTable  data={classesData} tableHeader={tableHeadings}/>
        </div>
    )
}

export default Classes
