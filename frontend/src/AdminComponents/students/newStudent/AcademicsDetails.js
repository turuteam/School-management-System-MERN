import React from 'react'

function AcademicsDetails(props) {

    let {
        register, 
        errors,
         autoID,
        setautoID,
        userID, 
        setuserID,
        classID,
        setclass,
        section,
        setsection,
        status,
        setstatus,
        dormitory,
        setdormitory,
        schoolarship,
        setschoolarship,
        feesCategory,
        setfeesCategory,
        lastSchool,
        setlastSchool,
        reasonforTransfer,
        isEdit,
        setreasonforTransfer
     } = props
    return (
        <div>
               <h3>Academics Details</h3>
                    <div class="row mb-3">
                        {!isEdit && 
                        <>
                        <div className="col-xs-12 col-sm-6">
                            <label for="name" className="form-label">Auto Generate ID</label>
                            <div className="form-check form-switch">
                                <input 
                                 className="form-check-input"
                                 type="checkbox" 
                                 onChange={() => setautoID(!autoID)}
                                 id="flexSwitchCheckChecked" checked={autoID}/> 
                            </div>
                            {/* <input name="tel" type="tel" className="form-control"  /> */}
                        </div>
                        {!autoID  &&  <div className="col-xs-12 col-sm-6 ">
                            <label for="" className="form-label">Student ID</label>
                            <input
                             name="userID" 
                             value={userID}
                             onChange={e => setuserID(e.target.value)} 
                             type="date" 

                             className="form-control" />
                        </div>}
                        </>
                       }
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="" className="form-label">Class</label>
                            <select   
                                ref={register({ required: true })} 
                                value={classID} 
                                onChange={e => setclass(e.target.value)}  
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            {errors.class && <span className=" form-error text-danger mb-2">This field is required</span>} 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="" className="form-label">Section / House</label>
                            <select value={section} onChange={e => setsection(e.target.value)}  name="class"   class="form-select" aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="" className="form-label">Status</label>
                            <select   ref={register({ required: true })} name="status" value={status} onChange={e => setstatus(e.target.value)}  name="class"   class="form-select" aria-label="Default select example">
                                <option selected  disabled hidden>select</option>
                                <option value="border">Border </option>
                                <option value="day">Day Student</option>
                            </select>
                            {errors.status && <span className=" form-error text-danger mb-2">This field is required</span>}
                        </div>
                        {status === "border" && 
                           <div className="col-xs-12 col-sm-6 col-md-4">
                           <label for="" className="form-label">Dormitory</label>
                           <select 
                             value={dormitory} 
                             onChange={e => setdormitory(e.target.value)}  
                             name="dormitary"   
                             class="form-select" 
                             aria-label="Default select example">
                               <option selected  hidden>select</option>
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                           </select>
                       </div>
                        }
                        
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 ">
                            <label for="name" className="form-label">Scholarship</label>
                            <select 
                                value={schoolarship} 
                                onChange={e => setschoolarship(e.target.value)}  
                                name="scholarship"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option selected   hidden>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 ">
                            <label for="secondname" className="form-label">Fees Category</label>
                            <select name="feesCategory" value={feesCategory} onChange={e => setfeesCategory(e.target.value)}     class="form-select" aria-label="Default select example">
                                <option selected   hidden>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 ">
                            <label for="name" className="form-label">Last School Attended</label>
                            <input 
                            name="lastschool" 
                            value={lastSchool}
                            onChange={e => setlastSchool(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="Name last school attended if any" />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <label for="secondname" className="form-label">Reason for Leaving  Last School</label>
                            <textarea 
                            name="reason" 
                            value={reasonforTransfer} 
                            onChange={e => setreasonforTransfer(e.target.value)} 
                            rows={4} className="form-control" ></textarea>
                        </div> 
                    </div>
        </div>
    )
}

export default AcademicsDetails
