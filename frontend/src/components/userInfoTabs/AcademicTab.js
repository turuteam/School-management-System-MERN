import React, { useState, useEffect } from 'react'
import axios from '../../store/axios';
import {selectFees} from '../../store/slices/schoolSlice';
import {useSelector} from 'react-redux'

function AcademicTab({user}) {
    console.log(user)
    const [section, setsection] = useState("");
    const [fees, setfees] = useState("");
    const [scholarship, setscholarship] = useState("");
    const feesSelector = useSelector(selectFees)

    useEffect(() => {
        if(user?.fees){
            // axios.get(`/fees/${user?.fees}`).then(res => {
            //     console.log(res);
            //     setfees(res.data?.doc)
            // })
            let type = feesSelector.find(e => e.code === user?.fees);
            console.log(type)
            setfees(type?.name)
         }

         if(user?.scholarship){
            axios.get(`/scholarships/${user?.scholarship}`).then(res => {
                console.log(res);
                setscholarship(res.data?.doc?.name)
            })
         }
       
        if(user?.section){
            axios.get(`/sections/${user?.section}`).then(res => {
                setsection(res.data.doc?.name)
                console.log(res);
            });
        }
         
        
    }, [user])


    return (
        <div>
            <div className="row  mb-3">
                <div className="col-4">Class </div>
                <div className="col-6">{user?.classID} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Section/ House </div>
                <div className="col-6">{section || "-"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Student Status </div>
                <div className="col-6">{user?.status} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Scholarship </div>
                <div className="col-6">{scholarship || "N/A"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Fees Category </div>
                <div className="col-6">{fees || "-"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Last School </div>
                <div className="col-6">{user.LastSchool?.school || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Reason for Leaving last School </div>
                <div className="col-6"> {user.LastSchool?.reason || "N/A"} </div>
            </div>
        </div>
    )
}

export default AcademicTab
