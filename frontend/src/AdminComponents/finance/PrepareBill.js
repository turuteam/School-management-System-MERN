import React, {useState, useEffect} from 'react'
import ListTable from '../shared/ListTable';
import Search from '../shared/Search';
import {useSelector} from 'react-redux';
import {selectClasses, selectacademicYear} from '../../store/slices/schoolSlice'
import axios from 'axios';

const tableHeader  = [
    {id: "userID" , name: "Student ID"},
    {id: "name" , name: "Name"},
    {id: "status" , name: "Status"},
    {id: "bill" , name: "Current Bill"},
]

function PrepareBill() {
    const [data, setdata] = useState([]);
    const [classID, setclass] = useState("");
    const [status, setstatus] = useState("");
    const [academicYear, setacademicYear] = useState("");
    const [term, setterm] = useState("")

    const classes = useSelector(selectClasses);
    const years= useSelector(selectacademicYear);


    useEffect(() => {
       axios.get('/transactions/students/fees').then(res => {
           console.log(res.data)
           setdata(res.data.docs)
       })
    }, [])

   

    const classesOptions = classes && classes?.map(e => {
        return{
            id: e.classCode,
            name: e.name
        }
    })
    const yearsOptions = years && years?.years?.map(e => {
        return {
            id: e,
            name: e
        }
    })

    const termsOptions = years && years?.terms?.map(e => {
        return {
            id: e,
            name: e
        }
    })

    
    const inputFields = [
        {
            label: "Search by Class",
            type: "select",
            value: classID,
            onChange: setclass,
            options: classesOptions
        },
        {
            label: "Search by Status",
            type: "select",
            value: status,
            onChange: setstatus,
            options: [
                {value: "all", name: "All Students"}, 
                {value: "day", name: "Day Students"},
                {value: "fresh-day", name: "Fresh day Students"},
                {value: "border", name: "Border Students"},
                {value: "fresh-border", name: "Fresh-border Border Students"}
            ]
        },
        {
            label: "Search by Academic Year",
            type: "select",
            value: academicYear,
            onChange: setacademicYear,
            options: yearsOptions
        },
        {
            label: "Search by Term",
            type: "select",
            value: term,
            onChange: setterm,
            options: termsOptions
        },

    ]

    return (
        <div>
            <h3>Prepare Bill</h3>
            <Search title="Filter Students" inputFields={inputFields} isReset={true}/>
            <ListTable data={data} tableHeader={tableHeader} noActions={true}/>
        </div>
    )
}

export default PrepareBill
