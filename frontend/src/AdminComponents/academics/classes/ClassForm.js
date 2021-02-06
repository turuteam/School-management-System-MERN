import React from 'react'
import { useForm } from "react-hook-form";

function ClassForm(props) {
    const { register, handleSubmit, errors } = useForm();
    let {
        name,
        setname,  
        code, 
        setcode, 
        campus, 
        setcampus , 
        teacher, 
        loading,
        handleAddClass,
        setteacher} = props

    

    return (
       <form onSubmit={handleSubmit(handleAddClass)} action="">
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
                    <option>...</option>
                  </select>
                </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">Class Teacher</label>
                <div className="col-sm-10">
                  <select value={teacher} onChange={e => setteacher(e.target.value)} id="teacher" className="form-select">
                    <option defaultValue  hidden>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
            </div>
            <div className="row">
                <div className="offset-sm-2">
                   <button disabled={loading} type="submit" className="btn blue__btn">
                       {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       Add 
                    </button>
                </div>
                
            </div>
       </form>
    )
}

export default ClassForm
