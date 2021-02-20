import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from '../../../store/axios'

function CourseForm(props) {
  const [teachers, setteachers] = useState([]);
   
  useEffect(() => {
    axios.get('/teachers').then(res => {
       setteachers(res.data);
       console.log(res.data)
    })
  }, [])

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
               <option value="Arts and History">Arts and History</option>
               <option value="Languages">Languages</option>
               <option value="Commercials">Commercials</option>
               <option value="Sciences">Sciences</option>
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
               {teachers.length > 0 ? teachers.map(e => <option  key={e.userID}>{e.name} {e.surname}</option>) : <option disabled>No data</option>}
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
