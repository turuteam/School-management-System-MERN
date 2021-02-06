import React, {useState} from 'react'
import AddForm from './NoteForm';

function EditNote() {
    const [classID, setclassID] = useState("");
    const [subject, setsubject] = useState("");
    const [topic, settopic] = useState("")
    const [notes, setnotes] = useState("")
    const [file, setfile] = useState("")
    return (
        <div>
           <h3>Add New Notes</h3>
           <AddForm 
            classID={classID}
            setclass={setclassID} 
            subject={subject} 
            setsubject={setsubject} 
            topic={topic} 
            settopic={settopic} 
            file={file} 
            setfile={setfile} 
            notes={notes}
            setnotes={setnotes}
           />
        </div>
    )
}

export default EditNote
