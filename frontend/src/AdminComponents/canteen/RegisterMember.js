import React, {useState} from 'react';
import RegisterForm from '../shared/AddMemberCanteeForm';
import axios from '../../store/axios';
import {errorAlert, successAlert} from '../../utils'
import Nav from './CanteenNav'

function RegisterMember() {
    const [name, setname] = useState("");
    const [userID, setuserID] = useState("");
    const [role, setrole] = useState("student");
    const [classID, setclass] = useState("");
    const [packageID, setpackage] = useState("");
    const [loading, setloading] = useState(false)


    const handleaddMember = () => {
        setloading(true)
        axios.post('/canteen/create', {
            name,
            userID,
            role,
            classID,
            paymentMethod: packageID
        }).then(res => {
            setloading(false);
            if(res.data?.error){
                 errorAlert(res.data.error);
                 return  0;
            }
            successAlert(`member with id ${res.data.user?.memberID}`); 
        }).catch(err => {
            setloading(false);
            console.log(err);
            errorAlert("Something when wrong");
        })
    }


    return (

             <>
                 <Nav />
                <h3 className="mb-3"> Register Canteen Member</h3>
              
                <div className="content__container">
                    <div className="row g-3 mx-3">
                    <div className="col-3 form-check">
                            <input onClick={e => setrole(e.target.value)} className="form-check-input" value="student" type="radio" name="flexRadioDefault" defaultChecked/>
                            <label className="form-check-label">
                                Student
                            </label>
                        </div>
                        <div className="col-3 form-check">
                            <input onClick={e => setrole(e.target.value)} className="form-check-input" value="staff" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label" >
                            Staff
                            </label>
                        </div>
                    </div>
                    <RegisterForm  
                        name={name}
                        onCreate={handleaddMember}
                        setname={setname}
                        userID={userID}
                        setuserID={setuserID}
                        role={role}
                        loading={loading}
                        classID={classID}
                        setclass={setclass}
                        setpaymentPackage={setpackage}
                    /> 
                </div>
           </>
     )
}

export default RegisterMember
