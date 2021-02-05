import React from 'react'
import AddCampus from './AddCampus'
import ListCampus from './ListCampus'

function Campuses() {

    const campuses = [
        {id: "camp1", name: "First Campus",location:"123 Street Road ,City  26000 ", added: "21-Jan-2021 07:49pm"},
        {id: "camp2", name: "Second Campus",location:"123 Street Road ,City  26000", added: "21-Jan-2021 07:49pm"},
        {id: "camp3", name: "Third Campus",location:"123 Street Road ,City  26000", added: "21-Jan-2021 07:49pm"},
        {id: "camp4", name: "Fouth Campus",location:"123 Street Road ,City  26000", added: "21-Jan-2021 07:49pm"},
        {id: "camp5", name: "Fiveth Campus",location:"123 Street Road ,City  26000", added: "21-Jan-2021 07:49pm"}
        
    ]
    return (
        <div>
            <h3>Campuses</h3>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <AddCampus/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <ListCampus campuses={campuses}/>
                </div>
            </div>
        </div>
    )
}

export default Campuses
