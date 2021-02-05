import React from 'react'
import AddDormitories from './AddDormitories';
import DormitoryList from './DormitoriesList';

function Dormitories() {

    const dormitories = [
        {id: "123", name: "First Dormitory", added: "21-Jan-2021 07:49pm"},
        {id: "124", name: "Second Dormitory", added: "21-Jan-2021 07:49pm"},
        {id: "125", name: "Third Dormitory", added: "21-Jan-2021 07:49pm"},
        {id: "126", name: "Fouth Dormitory", added: "21-Jan-2021 07:49pm"},
        {id: "127", name: "Five Dormitory", added: "21-Jan-2021 07:49pm"}
    ]
    return (
        <div className="dormotories__page">
            <h3>Dormitories</h3>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <AddDormitories/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <DormitoryList dormitories={dormitories}/>
                </div>
            </div>
        </div>
    )
}

export default Dormitories
