import React, {useState} from 'react'
import AddForm from './NoteForm';
import axios from '../../../store/axios';
import {errorAlert, successAlert} from '../../../utils';
import GoBack from '../../shared/GoBack'
import {useSelector} from 'react-redux'
import  {selectUser} from '../../../store/slices/userSlice'


function AddNote() {
    const [classID, setclassID] = useState("");
    const [subject, setsubject] = useState("");
    const [topic, settopic] = useState("");
    const [notes, setnotes] = useState("");
    const [file, setfile] = useState("");
    const user = useSelector(selectUser);
    const [loading, setloading] = useState(false)

    const handleAddNote = () => {
        setloading(true)
        const fileData = new FormData();
            fileData.append("photo", file);
            axios.post('/upload', fileData, {}).then((res) => {
              const path= res.data.path;
              console.log(path) 
              axios.post('/notes/create', {
                  topic,
                  classID,
                  courseID: subject,
                  notes,
                  file: path,
                  senderID: user?.id
              }).then(response => {
                console.log(response.data)
                  if(response.data.error){
                    errorAlert(res.data.error);
                    setloading(false);
                    return 0;
                  }
                  successAlert("notes successfully added");
                  setloading(false);
                  handleResetNote();  
              })
            })
        .catch(err => {
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
        <>
          <GoBack link="/academics/notes" name="Back  to Classes List"/>
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
      </>
    )
}

export default AddNote
