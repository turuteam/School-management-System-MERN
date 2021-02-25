import React from 'react'
import { useSelector} from 'react-redux';
import {selectClasses, selectacademicYear} from '../../../store/slices/schoolSlice'

function SearchStudent({
    term,loading, setterm,year, 
    setyear, setclassID, classID,setstudentID,
     studentOptions, studentID}) {

    const classes = useSelector(selectClasses);
    const academicYear = useSelector(selectacademicYear)


    return (
        <div className="content__container mb-3">
            <h3>Search Student</h3>
            <form action="">
                <div className="mb-3">
                    <label  className="form-label">Academic Year</label>
                    <select 
                    name="year" 
                    value={year}
                    onChange={e => setyear(e.target.value)}
                    className="form-select">
                       <option hidden defaultValue>Choose...</option>
                       {academicYear?.years?.length > 0 ? academicYear?.years?.map(e => <option key={e} value={e}>{e}</option> ) : 
                       <option disabled>No data</option> }
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Term</label>
                    <select 
                    value={term}
                    onChange={e => setterm(e.target.value)}
                    name="term" 
                    className="form-select">
                       <option hidden defaultValue>Choose...</option>
                       {academicYear?.terms?.length > 0 ? academicYear?.terms?.map(e => <option key={e} value={e}>{e}</option> ) : 
                       <option disabled>No data</option> }
                    </select>
                </div>
                 <div className="mb-3">
                    <label  className="form-label">Class</label>
                    <select 
                    value={classID}
                    onChange={e => setclassID(e.target.value)}
                    name="year" 
                    className="form-select">
                       <option hidden defaultValue>Choose...</option>
                       {classes.length > 0 ? classes.map(e => <option key={e.classCode} value={e.classCode}>{e.name}</option> ) : 
                       <option disabled>No data</option> }
                    </select>
                </div>
                {loading && <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                </div>}
                { studentOptions?.length > 0 &&
                    <div className="mb-3">
                        <label  className="form-label">Student</label>
                        <select 
                        value={studentID}
                        onChange={e => setstudentID(e.target.value)}
                        name="students" 
                        className="form-select">
                        <option hidden defaultValue>Choose...</option>
                           {studentOptions?.length > 0 ? studentOptions.map(e => <option key={e.userID} value={e.userID}>{e.name} {e.surname} - {e.userID}</option>) :
                         <option disabled> No data</option>}
                       
                        </select>
                    </div>
                }
            </form>
        </div>
    )
}

export default SearchStudent
