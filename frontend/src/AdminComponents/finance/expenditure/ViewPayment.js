import React, { useState, useEffect } from 'react'
import ListTable from '../../shared/ListTable';
import {Link} from 'react-router-dom';
import axios from '../../../store/axios';
import {getTrimString} from '../../../utils'

const tableHeader = [
    {id: "date", name: "Date"},
    {id: "category", name: "Category"},
    {id: "type", name: "Type"},
    {id: "description", name: "Description"},
    {id: "amount", name: "Amount"},
    {id: "paymentMethod", name: "Payment Type"},
]

function ViewPayment() {
    const [expenditures, setexpenditures] = useState([]);

    useEffect(() => {
        axios.get('/transactions').then(res => {
            let data = res.data.map(e =>{
                return {
                    ...e,
                    description: getTrimString(e.description, 50)
                }
            })
            setexpenditures(data)
        })
       
    }, [])
    
    return (
        <div>
           <h3>Expenditure</h3>
           <div className="float-right">
               <Link className="btn blue__btn" to="/finance/payment">Make a  Payment</Link>
           </div>
           <div className="mt-5">
                <ListTable 
                data={expenditures} 
                noActions={true}
                tableHeader={tableHeader}/>
           </div>
        </div>
    )
}

export default ViewPayment
