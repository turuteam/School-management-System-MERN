import React, {useState, useEffect} from 'react'
import FileTable from './NotesTable'
import {Link} from 'react-router-dom';
import Search from '../../shared/Search'
import {useHistory} from 'react-router-dom'
import axios from '../../../store/axios';
import {errorAlert} from '../../../utils';
import {useSelector} from 'react-redux';
import {selectUser} from '../../../store/slices/userSlice'

const tableHead = [
    {id: "date" , name: "Added"},
    {id: "topic" , name: "Topic"},
    {id: "courseID" , name: "Course"},
    {id: "classID" , name: "Class"},
    {id: "senderId", name: "Teacher"},
    {id: "file" , name: "File"},
   
]

function Notes() {
    const [subject, setsubject] = useState("");
    const [classID, setclass] = useState("");
    const [teacher, setteacher] = useState("");
    const [notes, setnotes] = useState([]);
    const history = useHistory();
    const user = useSelector(selectUser)

    useEffect(() => {
        axios.get('/notes').then(res => {
            console.log(res.data)
              setnotes(res.data)
        })
    }, [])

    const handleEdit = (id) => {
        history.push(`/academics/notes/edit/${id}`)
    }

    const handleDelete = (id) => {
        axios.delete(`/notes/delete/${id}`).then(res => {
            if(res.data.error){
                errorAlert(res.data.error)
            }
            setnotes(notes.filter(e => e._id !== id))
        })

    }

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
             <FileTable 
             handleDelete={handleDelete} 
             handleEdit={handleEdit} 
             data={notes} 
            user = {user?.id}
             tableHeader={tableHead}/>
        </div>
    )
}

export default Notes
