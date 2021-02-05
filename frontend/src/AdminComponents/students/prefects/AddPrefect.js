import React from 'react'

function AddPrefect() {
    return (
        <div className="content__container">
                <h5 className="mb-4">Add Prefect</h5>
                <form action="">
                    <div className="row mb-3">
                        <label  className="col-sm-3 col-form-label">Student ID</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-3 col-form-label">Position</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <button 
                            className="btn blue__btn offset-sm-2 col-xs-8 col-sm-3">
                            Add
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default AddPrefect
