import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Search from '../../shared/Search';
import FeesTable from './FeesTable';
import axios from '../../../store/axios';
import AddType from './AddFessModel';
import DeleteModel from './DeleteFeesModal'
import {errorAlert} from '../../../utils'

const tableHeader = [
    {id: "code", name: "Fees Type"},
    {id: "day", name: " Day"},
    {id: "freshDay", name: "Fresh Day"},
    {id: "border", name: "Border"},
    {id: "freshBorder", name: "Fresh Border"},
]

function SetFees() {
    const [year, setyear] = useState("");
    const [term, setterm] = useState("");
    const [fees, setfees] = useState([]);
    const [open, setOpen] = useState(false)
    const [name, setname] = useState("");
    const [deleteID, setdeleteID] = useState("")
    const [openDelete, setopenDelete] = useState(false)
    const [loading, setloading] = useState(false)
    const [deleteloading, setdeleteloading] = useState(false)

    useEffect(() => {
        axios.get('/fees').then(res => {
             setfees(res.data)
             console.log(res.data)
        })
    }, [])

    const formInputs = [
        {
            type: "select",
            name: "year",
            label: "Search by Academic year",
            value: year,
            onChange: setyear,
            options: [
                {id: "2020/2021", name: "2020 - 2021"}, 
                {id: "2019/2020", name: "2019 - 2020"},
                {id: "2018/2019", name: "2018 - 2019"},
                {id: "2017/2018", name: "2017 - 2018"},
                {id: "2016/2017", name: "2016 - 2017"},
            ]
        },
        {
            type: "select",
            name: "term",
            value: term,
            label: "Search by Academic term",
            onChange: setterm,
            options: [
                {id: "1st", name: "1st"}, 
                {id: "2nd", name: "2rd"},
                {id: "3rd", name: "3rd"},
            ]
        }
    ]

    const handleAddNew = () => {
        setloading(true);
        axios.post('/fees/create', {name}).then(res => {
            setloading(false);
            console.log(res)
            setfees([res.data.doc, ...fees])
            setOpen(false)
            setname("");
        })
    }

    const handleDelete = (id) =>{
        setopenDelete(true)
        setdeleteID(id)
    }


     const onDelete = () => {
         setdeleteloading(true)
         axios.delete(`/fees/delete/${deleteID}`).then(res => {
             setdeleteloading(false);
             if(res.data.error){
                errorAlert(res.data.error);
                return 0
             }
             setopenDelete(false)  
             setfees(fees.filter(e => e._id !== deleteID))
         }).catch(err => {
             console.log(err);
             errorAlert("error occurred");
         })

    }

   
    return (
        <div>
            <div className=" row mb-3">
               <Search  className="col-8" title="Current Fees"  inputFields={formInputs}/>
                <div className="d-flex justify-content-end">
                     <Link className="btn blue__btn ml-3" to="/finance/fees/set"> Set Fees</Link>
                     <button 
                        onClick={() => setOpen(true)} 
                        className="btn blue__btn ml-3" 
                        to="/finance/fees/set"> 
                       Add Fees Type
                    </button>
                </div>
            </div>
             <FeesTable 
             handleDelete={handleDelete}
             tableHeader={tableHeader} 
             data={fees}/>
             <AddType 
             open={open} 
             name={name}
             onSubmit={handleAddNew}
             loading={loading}
             setname={setname}
             setOpen={setOpen}/>
             <DeleteModel 
               handleDelete={onDelete}
               loading={deleteloading}
               open={openDelete}
               setOpen={setopenDelete}
            />
        </div>
    )
}

export default SetFees
