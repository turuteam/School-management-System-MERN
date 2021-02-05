import React from 'react'

function Upgrade() {
    return (
        <div className="content__container">
            <h3 className="mb-5">Student Promotion</h3>
            <form action="">
                <div className="row mb-5 aligh-items-center" >
                    <div className="col-12 ">
                        <h5  className="mb-4">Promoting Students to the next Class</h5>
                    </div>
                     <div className="col-xs-12 col-sm-6 col-md-4  mb-2">
                         <label htmlFor="">Current Class</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                     </div>
                     <div className="col-xs-12 col-sm-6 col-md-4  mb-2">
                         <label htmlFor="">Promote Class</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                     </div>
                     <div className="col-xs-12 col-sm-6 col-md-4  mb-2 mt-4">
                            <button className="btn blue__btn mr-3">Add Changes</button>
                            <button className="btn btn-danger">Cancel</button>
                     </div>
                   </div>  
                   <div className="row mb-5 aligh-items-center" >
                   <div className="col-12 ">
                        <h5  className="mb-4">Promoting Students in a Section to another</h5>
                    </div>
                     <div className="col-xs-12 col-sm-6 col-md-4">
                         <label htmlFor="">Current Section/House</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                      </div>
                     <div className="col-xs-12 col-sm-6 col-md-4">
                         <label htmlFor="">Promote Section/House</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4  mb-2 mt-4">
                            <button className="btn blue__btn mr-3">Add Changes</button>
                            <button className="btn btn-danger">Cancel</button>
                     </div>
                    </div>
                     <div className="row mb-5 aligh-items-center" >
                     <div className="col-12 ">
                        <h5  className="mb-4">Promoting Students in a dormitory to another</h5>
                    </div>
                     <div className="col-xs-12 col-sm-6 col-md-4">
                         <label htmlFor="">Current Dormitory</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="col-xs-12 col-sm-6 col-md-4">
                         <label htmlFor="">Promote Dormitory</label>
                         <select    
                                name="class"   
                                class="form-select" 
                                aria-label="Default select example">
                                <option  selected  disabled hidden >select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                     </div>
                     <div className="col-xs-12 col-sm-6 col-md-4  mb-2 mt-4">
                            <button className="btn blue__btn mr-3">Add Changes</button>
                            <button className="btn btn-danger">Cancel</button>
                     </div>
                </div>
            </form>

        </div>
    )
}

export default Upgrade
