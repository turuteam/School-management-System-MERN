import React, {useState} from 'react'
import AddForm from '../../AdminComponents/academics/notes/NoteForm';
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils';
import {useSelector} from 'react-redux'
import  {selectUser} from '../../store/slices/userSlice';
import {useParams} from 'react-router-dom'


function AddNote() {
    const [topic, settopic] = useState("");
    const [notes, setnotes] = useState("");
    const [file, setfile] = useState("");
    const user = useSelector(selectUser);
    const [loading, setloading] = useState(false);
    const {id} = useParams();

    console.log(id)


    const handleAddNote = async() => {
        setloading(true)
        const fileData = new FormData();
        fileData.append("photo", file);
            axios.post('/upload', fileData, {}).then((res) => {
              const path= res.data.path;
              axios.post('/notes/create', {
                  topic,
                  courseID: id,
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
                console.log(err)
                setloading(false);
                errorAlert("sorry something went error, try again later")
           })
    }


    const handleResetNote = () => {
         settopic("")
         setnotes("");
         setfile("");
    }

    return (
        <>
        <div className="content__container mb-5">
           <AddForm 
            topic={topic} 
            settopic={settopic} 
            file={file}
            loading={loading}
            handleReset={handleResetNote} 
            setfile={setfile} 
            role={user?.role}
            handleAdd={handleAddNote}
            notes={notes}
            setnotes={setnotes}
           />
        </div>
      </>
    )
}

export default AddNote
