import React from 'react';
import StudentInfo from './StudentInfo';
import StudentTabs from './StudentTabs'

function StudentDetails() {
    return (
        <div className="student__details">
            <h3>Student Details</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <StudentInfo/>   
                </div>
                <div className="col-xs-12 col-sm-6 col-md-8">
                    <StudentTabs/>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails
