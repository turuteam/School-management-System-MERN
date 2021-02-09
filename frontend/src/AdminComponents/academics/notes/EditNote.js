import React, {useState} from 'react'
import EditForm from './NoteForm';

function EditNote() {
    const [classID, setclassID] = useState("");
    const [subject, setsubject] = useState("");
    const [topic, settopic] = useState("")
    const [notes, setnotes] = useState("")
    const [file, setfile] = useState("")
    const [loading, setloading] = useState(false)

    const handleResetNote = () => {
        setclassID("");
        setsubject("");
        settopic("")
        setnotes("");
        setfile("");
   }
   const handleEditNote = () => {
       alert("edit")
   }

    return (
        <div>
           <h3>Add New Notes</h3>
           <EditForm 
            classID={classID}
            setclass={setclassID} 
            subject={subject} 
            setsubject={setsubject} 
            topic={topic} 
            settopic={settopic} 
            file={file} 
            handleAdd= {handleEditNote}
            handleReset ={handleResetNote}
            loading={loading}
            isEdit={true}
            setfile={setfile} 
            notes={notes}
            setnotes={setnotes}
           />
        </div>
    )
}

export default EditNote
