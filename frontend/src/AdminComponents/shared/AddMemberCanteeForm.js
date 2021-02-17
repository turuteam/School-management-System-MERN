import React from 'react';
import { useForm } from "react-hook-form";

function AddMemberCanteeForm(props) {
    const { register, handleSubmit, errors } = useForm();
    let {userID,loading, role, setuserID, name, setname, classID, setclass, setpaymentPackage, onCreate} = props


    return (
    <form action="" className=" g-3">
        <div className="col-md-8 mb-3">
           <label  className="form-label"> {role === "student" ? "Student ID" : "Staff ID"}  </label>
           <input 
            value={userID} 
            ref={register({ required: true })}
            onChange={e => setuserID(e.target.value)}  
            type="text" 
            className="form-control" name="userID"/>
            {errors.userId && <span className=" form-error text-danger mb-2">This field is required</span>}
        </div>
        <div className="col-md-8 mb-3">
           <label  className="form-label"> Full Name </label>
           <input 
            value={name} 
            ref={register({ required: true })}
            onChange={e => setname(e.target.value)}  
            type="text" 
            className="form-control" name="name"/>
             {errors.name && <span className=" form-error text-danger mb-2">This field is required</span>}
        </div>
        <div className="col-md-8 mb-3">
          {role === "student" ? 
            <>
            <label  className="form-label">Class</label>
            <select 
                value={classID}
                ref={register({ required: true })}
                onChange={e => setclass(e.target.value)}
                name="class" class="form-select">
                <option defaultValue hidden  >Choose...</option>
                <option value="2a">2A</option>
                <option value="2a">3A</option>
                <option value="2a">2B</option>
                <option value="2a">2C</option>
            </select>
            </> 
              : 
              <>
                <label  className="form-label">Staff's Position</label>
                <select 
                    value={classID}
                    onChange={e => setclass(e.target.value)}
                    name="class" className="form-select">
                    <option defaultValue hidden  >Choose...</option>
                    <option value="2a">2A</option>
                    <option value="2a">3A</option>
                    <option value="2a">2B</option>
                    <option value="2a">2C</option>
                </select>
              </>
            }
        </div>
        <div className="col-md-8 mb-3">
            <label  className="form-label">Select Payment Method</label>
            <div className="form-check">
                <input 
                className="form-check-input" 
                value="weekly" 
                type="radio" 
                onClick={(e) => setpaymentPackage(e.target.value)}
                name="flexRadioDefault" />
                <label className="form-check-label" >
                    Weekly  
                </label>
            </div>
            <div className="form-check ">
                <input 
                className="form-check-input" 
                onClick={(e) => setpaymentPackage(e.target.value)}
                value="monthy" 
                type="radio" 
                name="flexRadioDefault" />
                <label className="form-check-label" >
                   Monthy
                </label>
            </div>
            <div className="form-check">
                <input 
                className="form-check-input" 
                value="semester" 
                type="radio" 
                onClick={(e) => setpaymentPackage(e.target.value)}
                name="flexRadioDefault" />
                <label className="form-check-label" >
                   Semester
                </label>
            </div>
            <div className="form-check">
                <input 
                className="form-check-input" 
                onClick={(e) => setpaymentPackage(e.target.value)}
                value="yearly" 
                type="radio" 
                name="flexRadioDefault" />
                <label className="form-check-label" >
                   Yearly
                </label>
            </div>
        </div>
        <div className="mb-3">
            <button 
            disabled={loading} 
            onClick={handleSubmit(onCreate)} 
            className="btn blue__btn">
                {loading &&  <span className="spinner-border spinner-border-sm" role="status"></span>}
                Register 
            </button>
        </div>
     </form>
    )
}

export default AddMemberCanteeForm
