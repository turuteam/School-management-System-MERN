import React, {useState, useEffect} from 'react'
import TableList from '../../AdminComponents/shared/ListTable'


const tableHeader = [
   {id: "date", name: "Date"},
   {id: "amount", name: "Amount"},
   {id: "status", name: "Status"}
]
function Payrow() {
    const [payrowData, setpayrowData] = useState([])

    return (
        <div>
            <div className="content__container mb-5">
                <h3>Salary Details</h3>
                <div>
                    <div className="row  mb-3">
                        <div className="col-sm-3">Position Role: </div>
                        <div className="col-sm-6">{ "N/A"}</div>
                     </div>
                        <div className="row  mb-3">
                            <div className="col-sm-3">Monthy Salary: </div>
                            <div className="col-sm-6">{ "N/A"}</div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col-sm-3">Allowance: </div>
                            <div className="col-sm-6">{ "N/A"}</div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col-sm-3">Bank Details: </div>
                            <div className="col-sm-6">{ "N/A"} <br/> {"branch"}</div>
                        </div>
                </div>
            </div>
            <div className="mb-3">
                <h3>Salary Payments Records</h3>
                <TableList data={payrowData} tableHeader={tableHeader} />
            </div>
        </div>
    )
}

export default Payrow
