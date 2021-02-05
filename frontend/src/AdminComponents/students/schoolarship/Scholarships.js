import React from 'react'
import AddScholarship from './AddScholarship';
import ScholarshipList from './ScholarshipList';

function Scholarships() {

    const scholarships = [
        {id: "123", name: "Full Scholarship",percentage: "100",  added: "21-Jan-2021 07:49pm", },
        {id: "124", name: "Half Scholarship",percentage: "50", added: "21-Jan-2021 07:49pm"},
        {id: "125", name: "BEAM", percentage: "100", added: "21-Jan-2021 07:49pm"},
    ]
    return (
        <div className="dormotories__page">
            <h3>Scholarships</h3>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                     <AddScholarship/>
                </div>
                <div className="col-sm-12 col-md-7">
                  <ScholarshipList scholarships={scholarships}/>
                </div>
            </div>
        </div>
    )
}

export default Scholarships
