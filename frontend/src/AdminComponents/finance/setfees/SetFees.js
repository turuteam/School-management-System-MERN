import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../shared/Search';
import FeesTable from './FeesTable'

function SetFees() {
    const [year, setyear] = useState("");
    const [term, setterm] = useState("")

    const formInputs = [
        {
            type: "select",
            name: "year",
            label: "Search by Academic year",
            value: year,
            onChange: setyear,
            options: [
                {id: "2020/2021", name: "2020 - 2021"}, 
                {id: "2019/2020", name: "2019 - 2020"},
                {id: "2018/2019", name: "2018 - 2019"},
                {id: "2017/2018", name: "2017 - 2018"},
                {id: "2016/2017", name: "2016 - 2017"},
            ]
        },
        {
            type: "select",
            name: "term",
            value: term,
            label: "Search by Academic term",
            onChange: setterm,
            options: [
                {id: "1st", name: "1st"}, 
                {id: "2nd", name: "2rd"},
                {id: "3rd", name: "3rd"},
            ]
        }
    ]

    const tableHeader = [
        {id: "id", name: "#"},
        {id: "class", name: "Class"},
        {id: "day", name: " Day"},
        {id: "freshday", name: "Fresh Day"},
        {id: "border", name: "Border"},
        {id: "freshborder", name: "Fresh Border"},
    ]

    const feesData  = [
        {
            id: "1",
            class: "Class 2",
            day: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshday: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            border: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshborder: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            }
        },
        {
            id: "2",
            class: "Class 3",
            day: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshday: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            border: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshborder: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            }
        },
        {
            id: "4",
            class: "Class 4",
            day: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshday: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            border: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshborder: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            }
        },
        {
            id: "1",
            class: "Creche",
            day: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshday: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            border: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshborder: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            }
        },
        {
            id: "5",
            class: "JHS 1",
            day: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshday:{
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            border: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            },
            freshborder: {
                tuitionFee: 320,
                facilityFee: 50,
                facilityMaintenance: 50,
                examitionFee: 30
            }
        }
    ]
    return (
        <div>
            <div className=" row mb-3">
               <Search  className="col-8" title="Current Fees"  inputFields={formInputs}/>
                <div className="col-4">
                     <Link className="btn blue__btn" to="/"> Set Fees</Link>
                </div>
            </div>
             <FeesTable tableHeader={tableHeader} data={feesData}/>
        </div>
    )
}

export default SetFees
