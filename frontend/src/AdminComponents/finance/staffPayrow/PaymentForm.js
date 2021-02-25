import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import NumberFormat from 'react-number-format';
import {monthYear} from '../../../data'

function PaymentForm({ 
      month, setmonth,
      amount, setamount,remarks, setremarks,loading,handlePayement, balance,
     date, setdate,paymentType, setpaymentType}) {

    const { register, handleSubmit, errors } = useForm();

    return (
        <div className="content__container">
           <form action="">
              
                <div className="row mb-4">
                        <label 
                            className="col-sm-3 col-form-label">
                            Amount
                        </label>
                         <div className="col-sm-9">
                             <strong className="text-info ">Salary Due &nbsp;
                                    <NumberFormat 
                                    value={balance} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} />

                            </strong>
                              <input 
                              type="number" 
                              ref={register({ required: true, max: balance})} 
                              value={amount}
                              onChange={e => setamount(e.target.value)}
                              className="form-control" 
                              name="amount" 
                              placeholder="Enter amount in $"/>
                              {errors.amount && <div className="text-danger">Amount is required and it should not be above {balance} </div>}
                        </div>
                 </div>
                 <div className="row mb-4">
                         <label  
                         className="col-sm-3 col-form-label">
                             Date Paid
                        </label>
                         <div className="col-sm-9">
                              <input 
                              type="date" 
                              value={date}
                              ref={register({ required: true})} 
                              onChange={e => setdate(e.target.value)}
                              className="form-control" 
                              name="date"/>
                               {errors.date && <div className="text-danger">This field is required</div>}
                        </div>
                 </div>
                 <div className="row mb-4">
                    <label  className="col-sm-3 form-label">Month</label>
                    <div className="col-sm-9">
                           <input 
                              type="text" 
                              value={monthYear[month].name }
                              readOnly
                              className="form-control" 
                              name="date"/>
                        {/* <select 
                        value={month}
                        onChange={e => setmonth(e.target.value)}
                        readOnly
                        name="term" 
                        className="form-select">
                        <option hidden defaultValue>Choose...</option>
                        {monthYear?.length > 0 ? monthYear?.map(e => <option key={e.id} value={e.id}>{e.name}</option> ) : 
                        <option disabled>No data</option> }
                        </select> */}
                    </div>
                    
                </div>
                 <div className="row mb-4">
                        <label  
                            className="col-sm-3 col-form-label">
                            Remarks
                        </label>
                         <div className="col-sm-9">
                              <textarea 
                              rows={5} 
                               className="form-control" 
                               value={remarks}
                               onChange={e => setremarks(e.target.value)}
                               name="remarks"/>
                        </div>
                 </div>
                 <div className="row mb-4">
                         <div className="col-sm-9 offset-sm-3">
                              <button 
                                 disabled={loading}
                                 onClick={handleSubmit(handlePayement)}
                                 className="btn blue__btn">
                                     {loading &&  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                  Record Payment
                                </button>
                        </div>
                 </div>
                 

           </form>
        </div>
    )
}

export default PaymentForm
