import React from 'react';
import {Link} from 'react-router-dom'

function Card({icon, title, value, link}) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
        <Link to={`${link}`} className="dashboard__card">
            <div className="card__icon">
                {icon}
            </div>
            <div className="card__details">
                <h5>{title}</h5>
                <div className="card__digits"><strong>{value}</strong></div>
            </div>
        </Link>
    </div>
    )
}

export default Card
