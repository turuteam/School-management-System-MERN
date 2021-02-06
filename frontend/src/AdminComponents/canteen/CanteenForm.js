import React from 'react'

function CanteenForm(props) {

    let {studentID, setstudentID,  name, setname , term, setterm , year, setyear, classID, setclassID}  = props;

    return (
       <form action="" className="row g-3">
            <div className="col-md-6">
              <label  className="form-label">Student ID</label>
              <input 
                  value={studentID} 
                  onChange={e => setstudentID(e.target.value)}  
                  type="text" 
                  className="form-control" name="studentid"/>
            </div>
            <div className="col-md-6">
              <label  className="form-label">Name</label>
              <input  
                type="text" 
                value={name} 
                onChange={e => setname(e.target.value)}  
                className="form-control" 
                name="name"/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Select Student's Class</label>
                <select 
                    value={classID}
                    onChange={e => setclassID(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Select Academic Year</label>
                <select 
                    value={year}
                    onChange={e => setyear(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Select Term</label>
                <select 
                    value={term}
                    onChange={e => setterm(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
            </div>
            <div className="col-xs-12">
                <button className="btn blue__btn">Add</button>
            </div>
       </form>
    )
}

export default CanteenForm
