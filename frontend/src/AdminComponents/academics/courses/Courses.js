import React, {useState} from 'react'
import CourseTable from '../../shared/ListTable';
import Search from '../../shared/Search';

function Courses() {
    const [name, setname] = useState("")
    const [depart, setdepart] = useState("")
    const [teacher, setteacher] = useState("")

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
            label: "Search Type",
            value: depart,
            name: "type",
            onChange: setdepart
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
        {id: "a1", name: "Maths", type: "Science", teacher: "TK20213"},
        {id: "a2", name: "Geo", type: "Arts", teacher: "TK20213"},
        {id: "a3", name: "History", type: "Arts", teacher: "TK20213"},
        {id: "a4", name: "Science", type: "Science", teacher:  "TK20213"},
        {id: "a5", name: "Accounts", type: "Commercials", teacher:  "TK20213"},
        {id: "a6", name: "English", type: "Languages", teacher:  "TK20213"},

    ]
    const tableHeadings = [
        {id: "id", name: "ID"},
        {id: "name", name: "Class"},
        {id: "type", name: "Course Type"},
        {id: "teacher", name: "Teacher"},
    ]
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-10">
                     <Search title="Courses List" inputFields={inputFields}/>
                </div>  
                <div className="col-xs-12 col-sm-4 col-md-2">
                    <button className="btn orange__btn btn__lg">Add New Course</button>
                </div>
            </div>
           
             <CourseTable  data={classesData} tableHeader={tableHeadings}/>
        </div>
    )
}

export default Courses
