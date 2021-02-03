import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function Cards() {
    return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5> Students</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5> Staff</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5>Money Recieved</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5> Classes</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5> Campuses</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                    <div className="dashboard__card">
                        <div className="card__icon">
                        <PeopleAltIcon/>
                        </div>
                        <div className="card__details">
                            <h5>Subjects</h5>
                        <div className="card__digits"><strong>15000</strong></div>
                        </div>
                    </div>
                </div>
         </div>
    )
}

export default Cards
