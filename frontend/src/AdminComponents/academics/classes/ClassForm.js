import React from 'react'
import { useForm } from "react-hook-form";
import {useSelector} from 'react-redux';
import { selectCampuses, selectStaff} from '../../../store/slices/schoolSlice'

function ClassForm(props) {
    const campuses = useSelector(selectCampuses);
    const staff = useSelector(selectStaff)
    const { register, handleSubmit, errors } = useForm();
    let {
        name,
        setname,  
        code, 
        setcode, 
        campus, 
        academic,
        setacademic,
        setcampus , 
        teacher, 
        loading,
        isEdit,
        handleAddClass,
        setteacher} = props

    return (
       <form onSubmit={handleSubmit(handleAddClass)} action="">
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Academic Calendar</label>
                <div className="col-sm-10">
                  <select name="academic-calendar" 
                    className="form-select" 
                    value={academic} 
                    onChange={e => setacademic(e.target.value)}>
                    <option defaultValue  hidden>Choose...</option>
                    <option value="Trimester">Trimester</option>
                    <option value="Semester">Semester</option>
                  </select>
                </div>
            </div>
           <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Class Name</label>
                <div className="col-sm-10">
                    <input 
                     value={name} 
                     onChange={e => setname(e.target.value)} 
                     type="text" 
                     ref={register({ required: true })}
                     className="form-control" name="name"/>
                      {errors.name && <span className=" form-error text-danger mb-2">This field is required</span>}
                </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Class Code</label>
                <div className="col-sm-10">
                    <input 
                    ref={register({ required: true })}
                    value={code} 
                    onChange={e => setcode(e.target.value)} 
                    type="text" 
                    className="form-control" name="code"/>
                     {errors.code && <span className=" form-error text-danger mb-2">This field is required</span>}
                </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Campus</label>
                <div className="col-sm-10">
                  <select id="campus" 
                    className="form-select" 
                    value={campus} 
                    onChange={e => setcampus(e.target.value)}>
                    <option defaultValue  hidden>Choose...</option>
                     {campuses.length > 0 ? 
                       campuses.map(e => 
                          <option key={e._id} value={e._id}>{e.name}</option>)
                          :<option disabled>No campuses yet</option>
                        }
                  </select>
                </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Class Teacher</label>
                <div className="col-sm-10">
                  <select value={teacher} onChange={e => setteacher(e.target.value)} id="teacher" className="form-select">
                    <option defaultValue  hidden>Choose...</option>
                      {staff.length > 0 ? 
                       staff.map(e => 
                          <option key={e.userID} value={e.userID}>{e.name} {e.surname}</option>)
                          :<option disabled>No staff yet</option>
                        }
                  </select>
                </div>
            </div>
            <div className="row">
                <div className="offset-sm-2">
                   <button disabled={loading} type="submit" className="btn blue__btn">
                       {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       {isEdit ?  "Save Changes" : "Add"}
                    </button>
                </div>
                
            </div>
       </form>
    )
}

export default ClassForm
