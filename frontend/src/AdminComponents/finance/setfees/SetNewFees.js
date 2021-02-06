import React, { useState } from 'react'

function SetNewFees() {
    const [year, setyear] = useState("")
    const [term, setterm] = useState("")
    const [classID, setclass] = useState("")
    const [amount, setamount] = useState("")
    const [type, settype] = useState("")

    return (
        <div>
            <h3>Set Fees</h3>
           <form className="row" action="">
              <div className="col-md-6">
                <label className="form-label">Select Academic Year</label>
                <select 
                    value={year}
                    onChange={e => setyear(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2021/2022</option>
                    <option value="2a">2020/2021</option>
                    <option value="2a">2019/2020</option>
                    <option value="2a">2018/2019</option>
                </select>
                </div>
                <div className="col-md-6">
                <label className="form-label">Select Academic Tearm</label>
                <select 
                    value={term}
                    onChange={e => setterm(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2021/2022</option>
                    <option value="2a">2020/2021</option>
                    <option value="2a">2019/2020</option>
                    <option value="2a">2018/2019</option>
                </select>
                </div>
                <div className="col-md-6">
                <label className="form-label">Set fees for Class</label>
                <select 
                    value={classID}
                    onChange={e => setclass(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2021/2022</option>
                    <option value="2a">2020/2021</option>
                    <option value="2a">2019/2020</option>
                    <option value="2a">2018/2019</option>
                </select>
                </div>
                <div className="col-md-6">
                <label className="form-label">Select Type</label>
                <select 
                    value={type}
                    onChange={e => settype(e.target.value)}
                    name="class" class="form-select">
                    <option selected  >Choose...</option>
                    <option value="2a">2021/2022</option>
                    <option value="2a">2020/2021</option>
                    <option value="2a">2019/2020</option>
                    <option value="2a">2018/2019</option>
                </select>
                </div>
                <div className="col-md-6">
                        <label className="form-label">Amount</label>
                        <input  
                        value={amount} 
                        onChange={e => setamount(e.target.value)}
                        type="text" 
                        className="form-control" id="amount" />
                </div>
           </form>
        </div>
    )
}

export default SetNewFees
