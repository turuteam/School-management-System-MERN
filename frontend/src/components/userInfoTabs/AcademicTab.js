import React from 'react'

function AcademicTab({user}) {
    const data = user.user
    return (
        <div>
            <div className="row  mb-3">
                <div className="col-4">Class </div>
                <div className="col-6">{user?.classID} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Section/ House </div>
                <div className="col-6">{user?.section || "-"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Student Status </div>
                <div className="col-6">{user?.status} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Scholarship </div>
                <div className="col-6">{user?.scholarship || "N/A"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Fees Category </div>
                <div className="col-6">{user?.fees || "-"} </div>
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
