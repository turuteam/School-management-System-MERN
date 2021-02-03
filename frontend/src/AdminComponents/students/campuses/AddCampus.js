import React from 'react'

function AddCampus() {
    return (
        <div className="content__container">
            <h5 className="mb-4">Add Campus</h5>
            <form action="">
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Location</label>
                    <div className="col-sm-10">
                        <textarea rows={3} className="form-control" id="name"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <button className="btn blue__btn offset-sm-2 col-xs-8 col-sm-3">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddCampus
