import React, {useState} from 'react'
import AddForm from './CanteenForm'
import Nav from './CanteenNav'

function AddCanteenPayment() {
    const [name, setname] = useState("");
    const [studentID, setstudentID] = useState("");
    const [year, setyear] = useState("");
    const [term, setterm] = useState("");
    const [classID, setclassID] = useState("")

    return (
        <>
        <Nav />
        <h3>Add Canteen Payment </h3>
        <div className="content__container mb-5">
            <AddForm 
                name={name}
                studentID={studentID} 
                setstudentID={setstudentID}  
                setname={setname} 
                term = {term} 
                setterm = {setterm} 
                year={year} 
                setyear={setyear} 
                classID={classID} 
                setclassID={setclassID}
            />
        </div>
        </>
    )
}

export default AddCanteenPayment
