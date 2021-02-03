import React from 'react'
import AddCampus from './AddCampus'
import ListCampus from './ListCampus'

function Campuses() {
    return (
        <div>
            <h3>Campuses</h3>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <AddCampus/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <ListCampus/>
                </div>
            </div>
        </div>
    )
}

export default Campuses
