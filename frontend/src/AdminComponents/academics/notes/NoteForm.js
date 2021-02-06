import React from 'react'


function NoteForm(props) {
    let {classID, setclass, subject, setsubject, topic, settopic, file, setfile, notes , setnotes} = props

    return (
        <form className="row g-3" action="">
            <div className="col-md-6">
                <label className="form-label">Select Class</label>
                <select 
                    value={classID}
                    onChange={e => setclass(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Select Subject</label>
                <select 
                    value={subject}
                    onChange={e => setsubject(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Topic</label>
                <input  
                 value={topic} 
                 onChange={e => settopic(e.target.value)}
                 type="text" 
                 className="form-control" id="topic" />
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
                <input type="file" value={file} onChange={e => setfile(e.target.value)} className="form-control" id="topic" />
            </div>
            <div className="col-12">
                <button className="btn blue__btn mr-3">Add</button>
                <button className="btn orange__btn">Reset</button>
            </div>
        </form>
    )
}

export default NoteForm
