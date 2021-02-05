import React from 'react'
import ListTable from '../../shared/ListTable';

function Banking() {

    const data = [
        {id: "123",  name: "Teacher", bank: "Bank of China", accNum: "21294040392043205050", balance: "2500"},
        {id: "124", name: "Teacher", bank: "Bank of China", accNum: "21294040392043205050", balance: "2500"},
        {id: "125",  name: "Teacher", bank: "Bank of China", accNum: "21294040392043205050", balance: "2500"},
        {id: "126",  name: "Teacher", bank: "Bank of China", accNum: "21294040392043205050", balance: "2500"},
        {id: "127",  name: "Teacher", bank: "Bank of China", accNum: "21294040392043205050", balance: "2500"}
    ];
    const tableHeadings = [
        {id: "bank", name: "Bank"},
        {id: "name", name: "Account Name"},
        {id: "accNum", name: "Account Number"},
        {id: "balance", name: "Balance"},
        
 
    ];
 
    return (
        <div>
            <ListTable data={data} tableHeader={tableHeadings}/>
        </div>
    )
}

export default Banking
