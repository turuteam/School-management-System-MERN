import React, { useState } from 'react'
import FeeForm from './FeeForm'
import axios from '../../../store/axios'
import {Link} from 'react-router-dom'
import {errorAlert, successAlert} from '../../../utils'

function SetNewFees() {
    const [year, setyear] = useState("")
    const [term, setterm] = useState("")
    const [classID, setclass] = useState("")
    const [type, settype] = useState("");
    const [tution, settution] = useState("");
    const [facility, setfacility] = useState("");
    const [maintenance, setmaintenance] = useState("");
    const [exam, setexam] = useState("")

    const handleSubmit = () => {
        if(classID && type){
        var obj = {};
        var results = {
            tution,
            facility,
            maintenance,
            exam
        }
        if(type === "day"){
            obj =  {
                day: results
             }
        }
        else if(type === "freshDay"){
            obj =  {
                freshday: results
             }
        }
        else if(type === "freshBorder"){
            obj =  {
                freshBorder: results
             }
        }
        else if(type === "border"){
            obj =  {
                border: results
             }
        }
        else{
            return 0
        }
         axios.post('/fees/add',{name: classID, ...obj, year, term}).then(res => {
             if(res.data.error){
                 errorAlert(res.data.error);
                 return 0;
             }
             successAlert("successfully created");
             settution("");
             setfacility("");
             setmaintenance("");
             setyear("");
             setterm("");
             setclass("");
             setexam("");
             settype("");
             settution("");

         }).catch(err => {
             console.log(err)
            errorAlert("Error");
         })
        }
        else{
           errorAlert("Fill in all fields") 
        }
    }

    return (
        <div>
             <div className="d-flex justify-content-end">
                     <Link className="btn blue__btn" to="/finance/fees"> View All Fees</Link>
             </div>
            <h3>Set Fees</h3>
           <FeeForm 
              year={year}
              tution={tution}
              settution={settution}
              setfacility={setfacility}
              facility={facility}
              maintenance={maintenance}
              setmaintenance={setmaintenance}
              exam={exam}
              setexam={setexam}
              setyear={setyear}
              term={term}
              setterm={setterm}
              classID={classID}
              setclass={setclass}
              type={type}
              settype={settype}
              onSubmit={handleSubmit}
           />
        </div>
    )
}

export default SetNewFees
