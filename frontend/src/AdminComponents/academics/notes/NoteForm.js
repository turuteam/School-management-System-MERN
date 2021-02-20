import React from 'react';
import {useSelector} from 'react-redux'
import {selectClasses, selectCourses} from '../../../store/slices/schoolSlice';
import { useForm } from "react-hook-form";



function NoteForm(props) {
     const classes = useSelector(selectClasses);
     const courses = useSelector(selectCourses);
     const { register, handleSubmit, errors } = useForm();

    let {classID, setclass, subject, setsubject, 
        topic, settopic, loading,
        handleAdd, handleReset, isEdit,
        setfile, notes , setnotes} = props

    return (
        <form className="row g-3" action="">
            <div className="col-md-6">
                <label className="form-label">Select Class</label>
                <select 
                    value={classID}
                    onChange={e => setclass(e.target.value)}
                    name="class" className="form-select">
                    <option selected hidden >Choose...</option>
                    {classes.length > 0 ?  classes.map(e => <option value={e.classCode} key={e.classCode}>{e.name}</option>) 
                    :
                     <option disabled>No classes available yet</option>}
                </select>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Select Subject</label>
                <select 
                    value={subject}
                    onChange={e => setsubject(e.target.value)}
                    name="class" className="form-select">
                    <option selected  hidden>Choose...</option>
                    {courses.length > 0 ?  courses.map(e => <option value={e.code} key={e.code}>{e.name}</option>) 
                    :
                     <option disabled>No courses available yet</option>}
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Topic</label>
                <input  
                 value={topic} 
                 ref={register({ required: true })}
                 onChange={e => settopic(e.target.value)}
                 type="text" 
                 className="form-control" name="topic" />
                  {errors.topic && <span className=" form-error text-danger mb-2">This field is required</span>}
            </div>
            <div className="col-12">
                <label className="form-label">Notes</label>
                <textarea 
                 value={notes} 
                 onChange={e => setnotes(e.target.value)}
                rows={5} 
                className="form-control" 
                id="topic" ></textarea>
            </div>
            <div className="col-12">
                <label className="form-label">Upload file</label>
                <input 
                 type="file" 
                 accept=".jpg,.jpeg,.png,.doc,.docx,.pdf, .zip"
                 ref={register({ required: true })}
                 onChange={e => setfile(e.target.files[0])} 
                 className="form-control" 
                 name="file" />
                  {errors.file && <span className=" form-error text-danger mb-2">Please select file</span>}
            </div>
            <div className="col-12">
                <button 
                onClick={ handleSubmit(handleAdd)} 
                className="btn blue__btn mr-3">
                     {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       {isEdit ?  "Save Changes" : "Add"}
                </button>
                <button onClick={handleSubmit(handleReset)} className="btn orange__btn">Reset</button>
            </div>
        </form>
    )
}

export default NoteForm
