import React, {useState, useEffect} from 'react';
import axios from '../../store/axios';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Fees() {
    const [fees, setfees] = useState(null)
    const user = useSelector(selectUser);
    const [loading, setloading] = useState(false)
     
    useEffect(() => {
        setloading(true)
         axios.get(`/student/fees/${user?.id}`)
         .then(res => {
             setloading(false);
         }).catch(err => {
             setloading(false);
             console.log(err)
         })
    }, [user])

    return (
        <>
            <div  className="d-flex justify-content-end mb-5">
                 <Link to="/finance/fees/payments">Back <ArrowForwardIosIcon/> </Link>
           </div>
        <div className="content__container">
            <h3>Fees Details</h3>
                {!loading ? 
                <>
                    {!fees ?  
                     <div  className="d-flex justify-content-center">
                         <p>No fees details yet </p>
                    </div>
                   : 
                    <table className="table" table-bordered table-striped>
                    <thead>
                        <tr>
                        <th scope="col">Fees</th>
                        <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Tution Fee</th>
                        <td>{fees?.tution}</td>
                        </tr>
                        <tr>
                        <th scope="row">Facility Fee</th>
                        <td>{fees?.faciltiy}</td>
                        </tr>
                        <tr>
                        <th scope="row">Tution Maintenance</th>
                        <th scope="row">{fees?.maintanance}</th>
                        </tr>
                        <tr>
                        <th scope="row">Exam Fee</th>
                        <th scope="row">{fees?.exam}</th>
                        </tr>
                        <tr>
                        <th scope="row">Total</th>
                        <th scope="row">{fees?.exam}</th>
                        </tr>
                    </tbody>
                    </table>
                    }
                    </>
                : 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            }
        </div>
        </>
    )
}

export default Fees
