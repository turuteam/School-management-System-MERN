import React, {useState, useEffect} from 'react'
import {Avatar} from '@material-ui/core'
import axios from '../../../store/axios';
import {getImgSrc, getCapitalize, getIntial} from '../../../utils'

function ViewStudent({id}) {
    const [user, setuser] = useState({})

    useEffect(() => {
        axios.get(`/students/student/${id}`).then(res => {
            console.log(res.data)
            setuser(res.data.student)
        })
    }, [id])

    return (
        <div className="content__container">
            <div className="d-flex flex-column align-items-center bg-dark p-3 text-light mb-4">
                <Avatar  src={getImgSrc(user?.profileUrl)} style={{width: "100px" , height: "100px"}}/>
                <h3>{getCapitalize(user?.name)} {getIntial(user?.middlename)} {getCapitalize(user?.surname)}  - {id}</h3>

                <div>Class {user?.classID}</div>
                <h6>{user?.status}</h6>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Fees</th>
                    <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ARREARS</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>BILL</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>TOTAL BILL</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>TOTAL PAID</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>BALANCE</td>
                        <td>0.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewStudent
