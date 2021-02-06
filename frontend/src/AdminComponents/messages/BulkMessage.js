import React from 'react'

function BulkMessage() {
    return (
        <div>
        <div className="mb-5 content__container row">
            <div className="col-md-5">
               <label for="inputState" class="form-label">Select Group</label>
                <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>All Students</option>
                <option>All Staff</option>
                <option>All Parents</option>
                </select>
            </div>
        </div>
        <form action="" className=" content__container form__sender">
            <div className="header"> 
                <h3>Send Message to all</h3>
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

export default BulkMessage
