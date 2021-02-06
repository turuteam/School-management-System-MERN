import React, {useState} from 'react'
import FileTable from '../../shared/ListTable'
import {Link} from 'react-router-dom';
import Search from '../../shared/Search'

function Notes() {
    const [subject, setsubject] = useState("");
    const [classID, setclass] = useState("");
    const [teacher, setteacher] = useState("")

    const notes = [
        {id: "abc1", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
        {id: "abc2", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
        {id: "abc3", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
        {id: "abc4", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
        {id: "abc5", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    ]

    const tableHead = [
        {id: "id" , name: "#"},
        {id: "topic" , name: "Topic"},
        {id: "subject" , name: "Subject"},
        {id: "class" , name: "Class"},
        {id: "teacherID", name: "Teacher"},
        {id: "file" , name: "File"},
        {id: "added" , name: "Added"},
    ]

    const searchInputForm = [
        {
            type: "text",
            name: "subject",
            label: "Search by Subject",
            value: subject,
            onChange: setsubject
        },
        {
            type: "text",
            name: "class",
            label: "Search by Class",
            value: classID,
            onChange: setclass
        },
        {
            type: "text",
            name: "teacher",
            label: "Search by Teacher",
            value: teacher,
            onChange: setteacher
        }
    ]
    return (
        <div>
              <div className="d-flex flex-xs-column justify-content-between flex-sm-row align-items-center mb-3">
                   <Search title="Academics Notes"  inputFields={searchInputForm}/>
                  <div>
                      <Link to="/academics/notes/add" className="btn blue__btn lg__btn" >Add Form</Link>
                  </div>
              </div>
             <FileTable data={notes} tableHeader={tableHead}/>
        </div>
    )
}

export default Notes
