import React, {useState} from 'react'
import { useForm } from "react-hook-form";

function Guadian({setguadian, guadian}) {
    const [mobile, setmobile] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [relationship, setrelationship] = useState("")
    const [occupation, setoccupation] = useState("")
    const [address, setaddress] = useState("")
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
             <h3>Guadian Information</h3>
                   <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Full Name</label>
                            <input 
                            value={name}
                            onChange={e => setname(e.target.value)}
                            name="text" 
                            type="name" 
                            className="form-control"  />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  
                            value={mobile}
                            onChange={e => setmobile(e.target.value)}
                            className="form-label">Mobile Number</label>
                            <input 
                            type="tel" 
                            className="form-control" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Email</label>
                            <input 
                             value={email}
                             onChange={e => setemail(e.target.value)}
                            type="email" 
                            name="lastname" 
                            className="form-control" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label className="form-label">Relationship</label>
                            <input
                             name="text" 
                             value={relationship}
                             onChange={e => setrelationship(e.target.value)}
                             type="text" className="form-control"  />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Occupations</label>
                            <input 
                             value={occupation}
                             onChange={e => setoccupation(e.target.value)}
                            type="text" 
                            className="form-control" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label  className="form-label">Address</label>
                            <input 
                             value={address}
                             onChange={e => setaddress(e.target.value)}
                            type="text" 
                            name="address" className="form-control" />
                        </div>
                    </div>
        </div>
    )
}

export default Guadian
