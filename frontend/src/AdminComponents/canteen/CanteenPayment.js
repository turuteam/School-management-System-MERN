import React, {useState} from 'react'
import Search from '../shared/Search';
import TableList from '../shared/ListTable';
import {Link} from 'react-router-dom';

function CanteenPayment() {
    const [classID, setclass] = useState("");
    const [term, setterm] = useState("")

    const paymentData = [
        {
            id: "BK2021",
            name: "Rudo Mapfumba",
            amount: "123",
            date: "21 June 2020"
        },
        {
            id: "BK2021",
            name: "Rudo Mapfumba",
            amount: "123",
            date: "21 June 2020"
        },
        {
            id: "BK2021",
            name: "Rudo Mapfumba",
            amount: "123",
            date: "21 June 2020"
        }
    ]
    const tableHeader = [
        {id: "id" , name: "Student ID"},
        {id: "name" , name: " Student's Name"},
        {id: "amount" , name: "Amount Paid"},
        {id: "date" , name: "Date"}
    ]

    const inputFields = [
        {
            type: "select",
            label: "Search by Class",
            name: "class",
            value: classID,
            onChange: setclass,
            options: [
                { id: "1a", name: "Class A"},
                { id: "1b", name: "Class B"},
                { id: "1c", name: "Class C"},
                { id: "1d", name: "Class D"},
            ],
        },
        {
            type: "select",
            label: "Search by Period",
            name: "period",
            value: term,
            onChange: setterm,
            options: [
                { id: "today", name: "Today"},
                { id: "week", name: "Week"},
                { id: "month", name: "Month"},
                { id: "term", name: "Term"},
                { id: "year", name: "Year"},
            ],
        }
    ]
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-10">
                   <Search title="Canteen Payments" inputFields={inputFields} />   
                </div>
                  <div  className="col-xs-12 col-sm-2">
                       <Link to="/canteen/members/register" className="btn blue__btn mb-3">Add Canteen Member </Link>
                       <Link to="/canteen/members" className="btn blue__btn mb-3">View All Members </Link>
                       <Link className="btn blue__btn" to="/canteen/addpayment"> Make Payment</Link> 
                  </div>
            </div>
          
            <TableList tableHeader={tableHeader}  data={paymentData} />
        </div>
    )
}

export default CanteenPayment
