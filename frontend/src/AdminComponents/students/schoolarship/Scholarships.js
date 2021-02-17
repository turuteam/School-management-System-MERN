import React, {useState, useEffect} from 'react'
import AddScholarship from './AddScholarship';
import ScholarshipList from '../../shared/ListTable';
import axios from '../../../store/axios';
import {errorAlert, successAlert} from '../../../utils';
import EditScholarship from './EditScholarship'

const tableHeader = [
    {id: "name", name: "Name"},
    {id: "percentage", name: "Percentage"},
    {id: "students", name: "Number of Students"},
    {id: "createdAt", name: "Added"},
]

function Scholarships() {
    const [name, setname] = useState("");
    const [percentage, setpercentage] = useState("");
    const [loading, setloading] = useState(false);
    const [scholarships, setscholarships] = useState("");
    const [dataloading, setdataloading] = useState(false);
    const [open, setopen] = useState(false)
    const [editname, seteditname] = useState("");
    const [editpercentage, seteditpercentage] = useState("");
    const [edittypes, setedittypes] = useState({});
    const [editID, seteditID] = useState("");
    const [editloading, seteditloading] = useState(false);
    const [types, settypes] = useState({
        tuition: false,
        facility: false,
        maintenance: false,
        examination: false,
        transportation: false
    })

     useEffect(() => {
         setdataloading(true)
         axios.get('/scholarships').then(res => {
             setdataloading(false)
             setscholarships(res?.data);
         })
         
     }, [])

    const handleAdd = () => {
        setloading(false);
        axios.post('/scholarships/create', {name, percentage, types}).then(res => {
            setloading(false)
            if(res.data.error){
                errorAlert(res.data.error);
                return 0;
            }
            successAlert("Scholarship created");
            setname("");
            setpercentage("");
            settypes({
                tuition: false,
                facility: false,
                maintenance: false,
                examination: false,
                transportation: false
            })
            setscholarships([res.data.doc, ...scholarships])
        }).catch(err => {
            console.log(err);
            setloading(false)
            errorAlert("Failed to create")
        })
    }

    const onEdit = () => {
        console.log("submiting")
        seteditloading(true);
        axios.put(`/scholarships/update/${editID}`, {
            name: editname,
            percentage: editpercentage,
            types: edittypes
        }).then(res => {
            seteditloading(false)
            if(res.data.error){
                errorAlert(res.data.error);
                return 0;
            }
            successAlert(" Prefect successfully edited");
            seteditname("");
            setopen(false)
            seteditpercentage("");
            seteditname("");
            let filteredData = scholarships.filter(e => e._id !== editID)
            setscholarships([res.data.doc, ...filteredData])
            seteditID("");
        })
        .catch(err => {
            console.log(err)
            seteditloading(false)
            errorAlert("Failed to edit")
        })

        
    }

    const handleEdit = (id) => {
       let selected = scholarships.find(e => e._id === id);
       setopen(true)
       seteditname(selected?.name);
       setpercentage(selected?.percentage);
       setedittypes(selected?.types);
       seteditID(selected?.editID)
    }

    const handleDelete = (id) => {
        axios.delete(`/scholarships/delete/${id}`).then(res => {
            setloading(false)
            if(res.data.error){
                errorAlert(res.data.error)
                return 0
            }
            setscholarships(scholarships.filter( i => i._id !== id))
        })
        .catch(err => {
            console.log(err);
            errorAlert("something when wrong");
         })
    }

   
    return (
        <div className="dormotories__page">
            <h3>Scholarships</h3>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                     <AddScholarship
                     types={types}
                     settypes={settypes}
                     percentage={percentage}
                     setpercentage={setpercentage}
                     name={name}
                     setname={setname}
                     loading={loading}
                    handleAdd={handleAdd}/>
                </div>
                <div className="col-sm-12 col-md-7">
                  <ScholarshipList 
                   loading={dataloading}
                   data={scholarships} 
                   handleEdit={handleEdit}
                   handleDelete={handleDelete}
                   tableHeader={tableHeader}/>
                </div>
            </div>
            <EditScholarship  
            open={open} 
            onEdit={onEdit}
            setopen={setopen} 
            name={editname}
            setname={seteditname}
            types={edittypes}
            settypes={setedittypes}
            percentage={editpercentage}
            setpercentage={seteditpercentage}
            loading={editloading}
            
            />
        </div>
    )
}

export default Scholarships
