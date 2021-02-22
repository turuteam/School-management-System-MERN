import React, {useState, useEffect} from 'react'
import Search from '../shared/Search';
import TableList from '../shared/ListTable';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from '../../store/axios'
import {selectClasses} from '../../store/slices/schoolSlice'

function CanteenPayment() {
    const [classID, setclass] = useState("");
    const [term, setterm] = useState("")
    const classes = useSelector(selectClasses);
    const [payments, setpayments] = useState([]);


    useEffect(() => {
        axios.get('/canteen/payments').then(res => {
            console.log(res.data);
            setpayments(res.data)
        })
       
    }, [])


    const tableHeader = [
        {id: "memberID" , name: "Canteen ID"},
        {id: "name" , name: " Member's Name"},
        {id: "amount" , name: "Amount Paid"},
        {id: "date" , name: "Date"}
    ]

    const inputFields = [
        {
            type: "select",
            label: "Search by Canteen Member ID",
            name: "class",
            value: classID,
            onChange: setclass,
            options: classes && classes?.map(e => {
                return{
                    id: e.classCode,
                    name: e.name
                }
            })
        },
        {
            type: "date",
            label: "Search by Date",
            name: "period",
            value: term,
            onChange: setterm,
        }
    ]
    
    const handleDelete = (id) => {
        console.log(id)
    }
    
    const handleEdit = (id) => {
        console.log(id)
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-10">
                   <Search 
                    title="Canteen Payments" 
                    inputFields={inputFields} />   
                </div>
                  <div className="col-xs-12 col-sm-2">
                       <Link 
                           to="/canteen/members/register" 
                           className="btn blue__btn mb-3">
                           Add Canteen Member 
                        </Link>
                       <Link 
                           to="/canteen/members" 
                           className="btn blue__btn mb-3">
                              View All Members 
                        </Link>
                        <Link 
                           className="btn blue__btn" 
                           to="/canteen/payments/add"> 
                             Make Payment
                        </Link> 
                  </div>
            </div>
          
            <TableList 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            noActions={true}
            tableHeader={tableHeader}  
            data={payments} />
        </div>
    )
}

export default CanteenPayment
