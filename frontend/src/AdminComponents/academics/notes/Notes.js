import React, {useState, useEffect} from 'react'
import FileTable from '../../shared/ListTable'
import {Link} from 'react-router-dom';
import Search from '../../shared/Search'
import axios from '../../../store/axios';

const tableHead = [
    {id: "_id" , name: "#"},
    {id: "topic" , name: "Topic"},
    {id: "CourseID" , name: "Course"},
    {id: "classID" , name: "Class"},
    {id: "senderID", name: "Teacher"},
    {id: "file" , name: "File"},
    {id: "date" , name: "Added"},
]

function Notes() {
    const [subject, setsubject] = useState("");
    const [classID, setclass] = useState("");
    const [teacher, setteacher] = useState("");
    const [notes, setnotes] = useState([])

    useEffect(() => {
        axios.get('/notes').then(res => {
              setnotes(res.data)
        })
    }, [])

    // const notes = [
    //     {id: "abc1", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    //     {id: "abc2", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    //     {id: "abc3", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    //     {id: "abc4", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    //     {id: "abc5", topic: "Covid 19", subject: "Health", class: "2A",teacherID: "TN202012", file: "covid.pdf", added: "21-12-2020 17:35:11"},
    // ]

   

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
                    <div className="mb-3">
                        <Search title="Academics Notes"  inputFields={searchInputForm}/>
                    </div>
                  <div className="ml-sm-5">
                      <Link to="/academics/notes/add" className="btn blue__btn " >Add Form</Link>
                  </div>
              </div>
             <FileTable data={notes} tableHeader={tableHead}/>
        </div>
    )
}

export default Notes
