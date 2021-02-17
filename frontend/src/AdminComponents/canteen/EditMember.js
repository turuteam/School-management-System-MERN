import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from '../../store/axios'
import CanteenNav from './CanteenNav'
import {errorAlert, successAlert} from '../../utils'

function EditMember() {
    const [name, setname] = useState("");
    const [paymentMethod, setpaymentMethod] = useState("")
    const [loading, setloading] = useState(false)
    const {id}= useParams();

    useEffect(() => {
      axios.get(`/canteen/${id}`).then(res => {
          if(res.data.error){
              console.log(res.data.error);
              return 0;
          }
        const member = res.data.user;
        setname(member?.name);
        setpaymentMethod(member?.paymentMethod);
 
      })
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();
         setloading(true)
        axios.put(`/canteen/update/${id}`, {paymentMethod, name}).then(res => {
            setloading(false)
            if(res.data.error){
                errorAlert(res.data.error);
                return 0
            }
            successAlert("Successfully edited")
        }).catch(() =>{
            setloading(false);
            errorAlert("something went wrong")
        })
    }


    return (
        <div>
            <CanteenNav />
            <h3>Edit {id} Member</h3>
           <form  className="content__container">
                <div className="col-md-6 mb-4">
                <label  className="form-label">Name</label>
                <input  
                    type="text" 
                    value={name} 
                    onChange={e => setname(e.target.value)}  
                    className="form-control" 
                    name="name"/>
                </div>
                <div className="col-md-8 mb-3">
            <label  className="form-label">Select Payment Method</label>
            <div className="form-check">
                <input 
                className="form-check-input" 
                value="weekly" 
                type="radio" 
                checked={paymentMethod === "weekly"}
                onClick={(e) => setpaymentMethod(e.target.value)}
                name="flexRadioDefault" />
                <label className="form-check-label" >
                    Weekly  
                </label>
            </div>
            <div className="form-check ">
            <input 
                className="form-check-input" 
                value="monthy" 
                type="radio" 
                checked={paymentMethod === "monthy"}
                onClick={(e) => setpaymentMethod(e.target.value)}
                name="flexRadioDefault" />
                <label className="form-check-label" >
                    Monthy 
                </label>
            </div>
            <div className="form-check">
                <input 
                className="form-check-input" 
                value="semester" 
                checked={paymentMethod === "semester"}
                type="radio" 
                onClick={(e) => setpaymentMethod(e.target.value)}
                name="flexRadioDefault" />
                <label className="form-check-label" >
                   Semester
                </label>
            </div>
            <div className="form-check">
                <input 
                className="form-check-input" 
                onClick={(e) => setpaymentMethod(e.target.value)}
                value="yearly" 
                checked={paymentMethod === "yearly"}
                type="radio" 
                name="flexRadioDefault" />
                <label className="form-check-label" >
                   Yearly
                </label>
            </div>
        </div>
        <div>
            <button disabled={loading} onClick={handleEdit} className="btn blue__btn">
                {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
                Save Changes
            </button>
        </div> 
            </form>
        </div>
    )
}

export default EditMember
