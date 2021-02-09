import React, {useState} from 'react';
import TableList from '../../components/tables/ListTable';

const tableHeader = [
    {id: "date", name: "Date"},
    {id: "amount", name: "Amount ($)"},
    {id: "receipt", name: "Receipt Number"},
    {id: "paidto", name: "Paid to "},

]

function ExamsPage() {
    const [loading, setloading] = useState(false);

    const data = [
        {paidto: "camp1", amount: "First Campus", receipt:"123 Street Road ,City  26000", date: "21-Jan-2021 07:49pm"},
        {paidto: "camp2", amount: "Second Campus", receipt:"123 Street Road ,City  26000", date: "21-Jan-2021 07:49pm"},
        {paidto: "camp3", amount: "Third Campus", receipt:"123 Street Road ,City  26000", date: "21-Jan-2021 07:49pm"},
        {paidto: "camp4", amount: "Fouth Campus", receipt:"123 Street Road ,City  26000", date: "21-Jan-2021 07:49pm"},
        {paidto: "camp5", amount: "Fiveth Campus", receipt:"123 Street Road ,City  26000", date: "21-Jan-2021 07:49pm"}
    ]

    return (
        <div>
           <TableList 
           data={data} 
           tableHeader={tableHeader} 
           loading={loading}/>
        </div>
    )
}

export default ExamsPage
