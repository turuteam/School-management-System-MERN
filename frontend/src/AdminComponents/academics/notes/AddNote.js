import React, {useState} from 'react'
import AddForm from './NoteForm';
import axios from '../../../store/axios';
import {errorAlert, successAlert} from '../../../utils'


function AddNote() {
    const [classID, setclassID] = useState("");
    const [subject, setsubject] = useState("");
    const [topic, settopic] = useState("");
    const [notes, setnotes] = useState("");
    const [file, setfile] = useState("");
    const [loading, setloading] = useState(false)

    const handleAddNote = () => {
        setloading(true)
        axios.post('/notes/create', {
            topic,
            classID,
            courseID: subject,
            notes,
            file
        }).then(res => {
            if(res.data.error){
              errorAlert(res.data.error);
              setloading(false);
              return 0;
            }
            successAlert("notes successfully added");
            setloading(false);
            handleResetNote();  
        }).catch(err => {
            setloading(false);
            errorAlert("sorry something went error, try again later")
        })

    }
    const handleResetNote = () => {
         setclassID("");
         setsubject("");
         settopic("")
         setnotes("");
         setfile("");
    }

    return (
        <div className="content__container mb-5">
           <h3>Add New Notes</h3>
           <AddForm 
            classID={classID}
            setclass={setclassID} 
            subject={subject} 
            setsubject={setsubject} 
            topic={topic} 
            settopic={settopic} 
            file={file}
            loading={loading}
            handleReset={handleResetNote} 
            setfile={setfile} 
            handleAdd={handleAddNote}
            notes={notes}
            setnotes={setnotes}
           />
        </div>
    )
}

export default AddNote
