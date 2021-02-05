import React from 'react'

function EmploymentDetails(props) {
    let {
        role,
        setRole,
        department,
        setDepartment,
        campus,
        setCampus,
        employmentDate,
        setemploymentDate,
        qualification,
        setqualification,
        years,
        salary,
        allowance,
        setallowance,
        setsalary,
        setyears,
        register,
        error,


    } = props
    return (
        <div>
               <h3>Employment Details</h3>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Staff Role</label>
                            <select   
                                ref={register({ required: true })} 
                                value={role} 
                                onChange={e => setRole(e.target.value)}  
                                name="role"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="teacher">Teacher</option>
                                <option value="headmaster">Head Master</option>
                                <option value="accountant">Accountant</option>
                                <option value="teller">Teller</option>
                                <option value="security">Security</option>
                                <option value="proprietor">Proprietor</option>
                                <option value="cleaner">Cleaner</option>
                                <option value="cook">Cook</option>
                                <option value="admin">Admin</option>
                                <option value="technician">Technician</option>
                                <option value="janitor">Janitor</option>
                                <option value="matron">Matron</option>
                                <option value="secretary">Secretary</option>
                                <option value="driver">Driver</option>
                            </select>
                            
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Departments</label>
                            <select 
                                value={department} 
                                onChange={e => setDepartment(e.target.value)}  
                                name="department"   
                                className="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Campus</label>
                            <select    
                               name="campus" 
                               value={campus} 
                               onChange={e => setCampus(e.target.value)}    
                               className="form-select" 
                               aria-label="Default select example">
                                <option selected  disabled hidden>select</option>
                                <option value="border">Border </option>
                                <option value="day">Day Student</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4 ">
                            <label className="form-label">Employment Date</label>
                            <input 
                                name="employmentdate" 
                                value={employmentDate}
                                onChange={e => setemploymentDate(e.target.value)}
                                type="date" 
                                className="form-control" 
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Qualification</label>
                            <input 
                                name="lastschool" 
                                value={qualification}
                                onChange={e => setqualification(e.target.value)}
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6  col-md-4">
                            <label  className="form-label">Years with School</label>
                            <input 
                                name="years" 
                                value={years}
                                onChange={e => setyears(e.target.value)}
                                type="number" 
                                className="form-control" 
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 ">
                            <label className="form-label">Basic Salary </label>
                            <input 
                            name="salary" 
                            value={salary}
                            onChange={e => setsalary(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="monthy salary" />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <label  className="form-label">Allowance</label>
                            <input 
                            name="allowance" 
                            value={allowance}
                            onChange={e => setallowance(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="staff allowance" />
                        </div> 
                    </div>
        </div>
    )
}

export default EmploymentDetails
