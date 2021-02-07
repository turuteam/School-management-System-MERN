import React from 'react'
import { useForm } from "react-hook-form";

function CourseForm(props) {
    const { register, handleSubmit, errors } = useForm();
    let {type, teacher, setteacher, settype, name , setname, code, setcode, onSubmit, loading, isEdit} = props

    return (
       <form action="" onSubmit= {handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label  className="form-label">Course Name</label>
             <input 
                type="text" 
                value={name}
                ref={register({ required: true })}
                onChange={e => setname(e.target.value)}
                className="form-control" 
                name="name" />
              {errors.name && <span className=" form-error text-danger mb-2">This field is required</span>}
         </div>
        <div className="mb-3">
           <label  className="form-label">Course Code</label>
           <input 
                type="text" 
                value={code}
                ref={register({ required: true })}
                onChange={e => setcode(e.target.value)}
                className="form-control" 
                name="code" />
            {errors.code && <span className="form-error text-danger mb-2">This field is required</span>}
        </div> 
        <div className="mb-3">
           <label  className="form-label">Course Type</label>
            <select name="type" 
                value={type} 
                onChange={e => settype(e.target.value)} 
                id="inputState" 
                className="form-select">
              <option defaultValue hidden>Choose...</option>
              <option>...</option>
           </select>
         </div>
        <div className="mb-3">
           <label  className="form-label">Course Teacher</label>
           <select name="type" 
                value={teacher} 
                onChange={e => setteacher(e.target.value)} 
                id="inputState" 
                className="form-select">
              <option defaultValue hidden>Choose...</option>
              <option>...</option>
            </select>
        </div> 
        <div className="col-12">
             <button 
               disabled={loading} 
               type="submit" 
               className="btn btn-primary">
                    {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                       {isEdit ?  "Save Changes" : "Add"}
            </button>
       </div>
     </form>
    )
}

export default CourseForm
