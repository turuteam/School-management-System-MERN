import React from 'react'

function StaffMessage() {
    return (
        <div>
            <div className="mb-5 content__container row">
                <form className="mb-5 col-md-6">
                    <label for="inputState" class="form-label">Search Staff by Name or Staff ID</label>
                    <input className="form-control" type="text" placeholder="Type here..."/>
                    
                </form>
                <div className="col-md-5">
                   <label for="inputState" class="form-label">OR Select Staff</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
            </div>
            <form action="" className=" content__container form__sender">
                <div className="header"> 
                    <h3>Send Message to Staff</h3>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-2" htmlFor="">Recipient:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value="" type="text" readOnly/>
                    </div>  
                </div>
                <div className="row mb-2">
                    <label className="col-sm-2" htmlFor="">Sender:</label>
                    <div className="col-sm-10">
                        <input className="form-control" value="" type="text" readOnly/>
                    </div>
                </div>
               <div className="mb-2 row">
                   <div className="col-12">
                      <textarea className="form-control" name="" rows="10" placeholder="Type here"></textarea>
                   </div>
                   <div className="col-12">
                       <button className="btn blue__btn w-100">Send</button>
                   </div>
                  
               </div>
            </form>
        </div>
    )
}

export default StaffMessage
