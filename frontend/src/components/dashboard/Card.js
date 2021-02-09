import React from 'react'

function Card({icon, title, value}) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
        <div className="dashboard__card">
            <div className="card__icon">
                {icon}
            </div>
            <div className="card__details">
                <h5>{title}</h5>
            <div className="card__digits"><strong>{value}</strong></div>
            </div>
        </div>
    </div>
    )
}

export default Card
