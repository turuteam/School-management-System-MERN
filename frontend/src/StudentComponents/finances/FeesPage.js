import React, {useState, useEffect} from 'react'
import TableList from '../../AdminComponents/shared/ListTable';
import {Link} from 'react-router-dom';
import axios from '../../store/axios';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';

const tableHeader = [
    {id: "date", name: "Date"},
    {id: "receipt", name: "Receipt Number"},
    {id: "transaction", name: "Transaction"},
    {id: "description", name: "Description"},
    {id: "amount", name: "Amount"},
]
function FeesPage() {
    const [loading, setloading] = useState(false);
    const [payments, setpayments] = useState([]);
    const user = useSelector(selectUser);

   useEffect(() => {
       setloading(true);
       axios.get(`/fees/user/${user?.id}`).then(res => {
           setloading(false);
           console.log(res.data)
       }).catch(err => {
           setloading(false);
           console.log(err)
       })
   }, [user])

    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                      <h3 className="mb-4">Your Payments</h3>
                </div>
               <div className="col-xs-12 col-sm-6">
                   <div className="d-flex justify-content-around">
                      <Link className="btn orange__btn" to="/finance/fees/due">Due Payment</Link>    
                      <Link className="btn blue__btn" to="/finance/fees"> Fees</Link>
                   </div>
               </div>
            </div>
            <TableList 
                data={payments} 
                noActions={true}
                tableHeader={tableHeader} 
                loading={loading}/>

        </div>
    )
}

export default FeesPage
