import React from 'react'
import {getCapitalize} from '../../../utils'


function InfoTab(user) {
   
    return (
        <div>
            <div className="row mb-3">
                <div className="col-4">Name: </div>
                <div className="col-6">{getCapitalize(user.user?.name)} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Surname: </div>
                <div className="col-6">{getCapitalize(user.user?.surname)} </div>
            </div>
            {user.user?.middleName && 
                <div className="row  mb-3">
                <div className="col-4">Middle Name </div>
                <div className="col-6">{getCapitalize(user.user?.middleName)} </div>
            </div>
            }
            <div className="row  mb-3">
                <div className="col-4">Gender: </div>
                <div className="col-6">{user.user?.gender || "null"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Email: </div>
                <div className="col-6">{user.user?.email || "null"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Date of Birth: </div>
                <div className="col-6">{user.user?.dateofBirth || "null"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Place of birth </div>
                <div className="col-6">{user.user?.placeofBirth || "null"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Religion: </div>
                <div className="col-6">{user.user?.religion || "null"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Nationality: </div>
                <div className="col-6">{user.user?.nationality || "null"} </div>
            </div>
        </div>
    )
}

export default InfoTab
