import React from 'react'

function CanteenForm(props) {

    let {studentID, setstudentID,  amount, setamount}  = props;

    return (
       <form action="" className="row g-3">
            <div className="col-md-10">
              <label  className="form-label">Canteen Member ID</label>
              <input 
                  value={studentID} 
                  onChange={e => setstudentID(e.target.value)}  
                  type="text" 
                  className="form-control" name="studentid"/>
            </div>
            <div className="col-md-10">
              <label  className="form-label">Amount Paid</label>
              <input 
                  value={amount} 
                  onChange={e => setamount(e.target.value)}  
                  type="number" 
                  className="form-control" name="studentid"/>
            </div>
           
            <div className="col-xs-12">
                <button className="btn blue__btn">Add</button>
            </div>
       </form>
    )
}

export default CanteenForm
