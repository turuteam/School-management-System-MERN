import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {selectClasses, 
    selectCourses, 
    selectDormitories, 
    selectScholarship, 
    selectSection, 
    selectFees,
    selectCampuses} from '../../../store/slices/schoolSlice'

function AcademicsDetails(props) {
    const classes = useSelector(selectClasses);
    const courses = useSelector(selectCourses);
    const dormitories = useSelector(selectDormitories);
    const scholarship = useSelector(selectScholarship);
    const sections = useSelector(selectSection);
   const campuses = useSelector(selectCampuses);
   const feesType = useSelector(selectFees)
   const [showCheck, setshowCheck] = useState(false)

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
        setreasonforTransfer,
        handleCoursesCheckbox
     } = props
    return (
        <div>
               <h3>Academics Details</h3>
                    <div class="row mb-3">
                        {!isEdit && 
                        <>
                        <div className="col-xs-12 col-sm-6">
                            <label htmlFor="name" className="form-label">Auto Generate ID</label>
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
                            <label  className="form-label">Student ID</label>
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
                            <label  className="form-label">Class</label>
                            <select   
                                ref={register({ required: true })} 
                                value={classID} 
                                onChange={e => setclass(e.target.value)}  
                                name="class"   
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue   hidden >select</option>
                                {classes.length > 0 ? 
                                classes.map(e => 
                                <option key={e.classCode} value={e.classCode}>{e.name}</option>) 
                                : <option disabled>No data yet</option>}

                            </select>
                            {errors.class && <span className=" form-error text-danger mb-2">This field is required</span>} 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Section / House</label>
                            <select 
                            value={section} 
                            onChange={e => setsection(e.target.value)}  
                            name="house"   
                            className="form-select" aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {sections.length > 0 ? 
                                  sections.map(e => <option key={e._id} value={e._id}>{e.name}</option>) : <option disabled>No data yet</option>}
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Status</label>
                            <select  
                                ref={register({ required: true })} 
                                name="status" 
                                value={status} 
                                onChange={e => setstatus(e.target.value)} 
                                className="form-select" 
                                aria-label="Default select example">
                                <option defaultValue  hidden>select</option>
                                <option value="border">Border </option>
                                <option value="day">Day Student</option>
                            </select>
                            {errors.status && <span className=" form-error text-danger mb-2">This field is required</span>}
                        </div>
                        {status === "border" && 
                           <div className="col-xs-12 col-sm-6 col-md-4">
                           <label  className="form-label">Dormitory</label>
                           <select 
                             value={dormitory} 
                             onChange={e => setdormitory(e.target.value)}  
                             name="dormitary"   
                             className="form-select" 
                             aria-label="Default select example">
                               <option defaultValue  hidden>select</option>
                               {dormitories.length > 0 ? dormitories.map(e => <option key={e._id} value={e._id}>{e.name}</option>) : <option disabled>No data yet</option>}
                           </select>
                       </div>
                        }
                        
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6  col-md-4">
                            <label  className="form-label">Scholarship</label>
                            <select 
                                value={schoolarship} 
                                onChange={e => setschoolarship(e.target.value)}  
                                name="scholarship"   
                                className="form-select" 
                                aria-label="Default select example">
                                <option defaultValue   hidden>select</option>
                                {scholarship.length > 0 ? scholarship.map(e => <option key={e._id} value={e._id}>{e.name}</option>) : <option disabled>No data yet</option>}
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6  col-md-4">
                            <label  className="form-label">Fees Category</label>
                            <select 
                            name="feesCategory" 
                            value={feesCategory} 
                            onChange={e => setfeesCategory(e.target.value)}     
                            className="form-select" 
                            aria-label="Default select example">
                                <option defaultValue   hidden>select</option>
                                {feesType.length > 0 ? feesType.map(e => 
                                <option key={e.code} value={e.code}>
                                    {e.name}
                                </option>) : 
                                <option disabled>No data yet</option>}
                                {/* <option value="primary">Primary</option>
                                <option value="preSchool">Pre-School</option>
                                <option value="jhs">JHS</option> */}
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6  col-md-4">
                            <label  className="form-label">Campus</label>
                            <select 
                            name="feesCategory" 
                            value={feesCategory} 
                            onChange={e => setfeesCategory(e.target.value)}     
                            className="form-select" 
                            aria-label="Default select example">
                                <option defaultValue   hidden>select</option>
                                {campuses.length > 0 ? campuses.map(e => <option key={e._id} value={e._id}>{e.name}</option>) : <option disabled>No data yet</option>}
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                          <div className="col-xs-12 col-sm-6 col-md-4">
                                <label  className="form-label">Courses</label>
                               <div className="selectBox">
                                    <select onClick={ () => setshowCheck(!showCheck)} className="form-select" >
                                        <option hidden>Select options</option>
                                    </select>
                                    {showCheck && <div className="showcheckboxes">
                                        {courses.length  > 0 ? 
                                         <>
                                             {courses.map(e =>  
                                                        <div key={e.code} value={e.code} className="form-check ">
                                                            <input 
                                                                onChange={handleCoursesCheckbox} 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                value={e.code} 
                                                                id="flexCheckDefault"/>
                                                            <label className="form-check-label" >
                                                               {e.name}
                                                            </label>
                                                        </div>
                                            )}
                                         </> :  <option disabled>No data yet</option>}
                                    </div>}
                              </div>
                         </div >
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label className="form-label">Last School Attended</label>
                            <input 
                            name="lastschool" 
                            value={lastSchool}
                            onChange={e => setlastSchool(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="Name last school attended if any" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Reason for Leaving  Last School</label>
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
