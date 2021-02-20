import React, { useState } from 'react'
import SearchStudent from './SearchStudent';
import PaymentForm from './PaymentForm';
import ViewStudent from './ViewStudent';
import axios from '../../../store/axios';
import {errorAlert, successAlert } from '../../../utils';


function BillPayment() {
    const [year, setyear] = useState("");
    const [term, setterm] = useState("");
    const [classID, setclassID] = useState("");
    const [studentID, setstudentID] = useState("")
    const [studentOptions, setstudentOptions] = useState([]);
    const [amount, setamount] = useState("");
    const [date, setdate] = useState("");
    const [bank, setbank] = useState("");
    const [chequeNo, setchequeNo] = useState("")
    const [paymentType, setpaymentType] = useState("");
    const [applyTo, setapplyTo] = useState({
        all: false,
        tuition: false,
        examination: false
    });
    const [remarks, setremarks] = useState("");
    const [loading, setloading] = useState(false);
    const [loadingStudents, setloadingStudents] = useState(false)
   

    const handleSelectClass = (id) => {
           setloadingStudents(true)
           setstudentOptions([])
           setstudentID("");
           setclassID(id);
           axios.get(`/students/class/${id}`).then(res => {
               setloadingStudents(false)
                if(res.data.error){
                    errorAlert(res.data.error);
                    return 0;
                }
                setstudentOptions(res.data.users)
           }).catch(err => {
               console.log(err);
               setloadingStudents(false)
           })
    }

    const handlePayement = () => {
        setloading(true)
         axios.post('/transactions/create', {
             date,
             amount,
             paymentMethod: paymentType,
             type: "income",
             description: remarks,
             bank,
             chequeNumber: chequeNo,
             category: "fees",
            fees:{
                userID: studentID,
                term,
                academicYear: year,
                applyTo
            } 

         }).then(res => {
            setloading(false)
             if(res.data.error){
                 errorAlert(res.data.error)
             }
             successAlert("Payment successfully made")
             setdate("");
             setamount("");
             setremarks("");
             setchequeNo("");
             setbank("");
             setpaymentType("");

             
         }).catch(() => {
            setloading(false);
            errorAlert("Transaction Failed")
         })
        
    }

    return (
        <div>
           <h3>Bill Payment</h3>
           <div className="row">
               <div className="col-sm-6">
                   <SearchStudent
                     year={year}
                     term={term}
                     loading={loadingStudents}
                     setterm={setterm}
                     setyear={setyear}
                     studentID={studentID}
                     setstudentID={setstudentID}
                     setclassID={handleSelectClass}
                     classID={classID}
                     studentOptions={studentOptions}
                   />

                   {studentID && 
                    <PaymentForm 
                     amount={amount}
                     chequeNo={chequeNo}
                     setchequeNo={setchequeNo}
                     bank={bank}
                     setbank={setbank}
                     setamount={setamount}
                     date={date}
                     applyTo={applyTo}
                     setapplyTo={setapplyTo}
                     setdate={setdate}
                     paymentType={paymentType}
                     setpaymentType={setpaymentType}
                     remarks={remarks}
                     setremarks={setremarks}
                     handlePayement={handlePayement}
                     loading ={loading}
                   />}
               </div>
               <div className="col-sm-6">
                   {studentID &&  <ViewStudent id={studentID} />}
               </div>
           </div>
        </div>
    )
}

export default BillPayment
