import React, {useState} from 'react'
import TableList from '../../components/tables/ListTable';

const tableHeader = [
    {id: "type", name: "Type"},
    {id: "event", name: "Events"},
    {id: "start", name: "Start"},
    {id: "end", name: "End"},

]

function FeesPage() {
    const [loading, setloading] = useState(false);

    const data = [
        {type: "camp1", event: "First Campus", start:"123 Street Road ,City  26000", end: "21-Jan-2021 07:49pm"},
        {type: "camp2", event: "Second Campus", start:"123 Street Road ,City  26000", end: "21-Jan-2021 07:49pm"},
        {type: "camp3", event: "Third Campus", start:"123 Street Road ,City  26000", end: "21-Jan-2021 07:49pm"},
        {type: "camp4", event: "Fouth Campus", start:"123 Street Road ,City  26000", end: "21-Jan-2021 07:49pm"},
        {type: "camp5", event: "Fiveth Campus", start:"123 Street Road ,City  26000", end: "21-Jan-2021 07:49pm"}
    ]

    return (
        <div>
            <h3 className="mb-4">Fees Payments</h3>
            <TableList 
           data={data} 
           tableHeader={tableHeader} 
           loading={loading}/>

        </div>
    )
}

export default FeesPage
