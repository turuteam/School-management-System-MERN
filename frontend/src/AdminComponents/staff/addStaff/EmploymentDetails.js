import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../store/axios";
import { schoolDepart } from "../../../data";
import {
  selectClasses,
  selectCourses,
  selectCampuses,
} from "../../../store/slices/schoolSlice";

function EmploymentDetails(props) {
  const classes = useSelector(selectClasses);
  const courses = useSelector(selectCourses);
  const campuses = useSelector(selectCampuses);
  const [positions, setpositions] = useState([]);
  const [showCheck, setshowCheck] = useState(false);

  useEffect(() => {
    axios.get("/payrow").then((res) => {
      console.log(res.data);
      setpositions(res.data);
    });
  }, []);

  let {
    role,
    setRole,
    department,
    setDepartment,
    campus,
    setCampus,
    employmentDate,
    setemploymentDate,
    qualification,
    setqualification,
    years,
    setyears,
    bank,
    setbank,
    accountNumber,
    setaccountNumber,
    register,
    errors,
    classID,
    setclass,
    handleCoursesCheckbox,
  } = props;

  return (
    <div>
      <h3>Employment Details</h3>
      <div className="row mb-3">
        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label">Staff Role</label>
          <select
            ref={register({ required: true })}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue hidden>
              select
            </option>
            {positions &&
              positions.map((e) => (
                <option value={e?.code} key={e?._id}>
                  {e?.name}
                </option>
              ))}
          </select>
          {errors.role && (
            <span className=" form-error text-danger mb-2">
              Name is required
            </span>
          )}
        </div>
        <div className="col-xs-12 col-sm-6 mb-3">
          <label className="form-label">Departments</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            name="department"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue hidden>
              select
            </option>
            {schoolDepart.length > 0 ? (
              schoolDepart.map((e) => (
                <option key={e.id} value={e._d}>
                  {e.name}
                </option>
              ))
            ) : (
              <option disabled>No departments yet</option>
            )}
          </select>
        </div>
        <div className="col-xs-12 col-sm-6 mb-3">
          <label className="form-label">Campus</label>
          <select
            name="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue hidden>
              select
            </option>
            {campuses.length > 0 ? (
              campuses.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.name}
                </option>
              ))
            ) : (
              <option disabled>No campuses yet</option>
            )}
          </select>
        </div>

        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label">Employment Date</label>
          <input
            name="employmentdate"
            value={employmentDate}
            onChange={(e) => setemploymentDate(e.target.value)}
            type="date"
            className="form-control"
          />
        </div>
        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label">Bank</label>
          <input
            name="bank"
            value={bank}
            onChange={(e) => setbank(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label"> Account Number</label>
          <input
            name="accountNumber"
            value={accountNumber}
            onChange={(e) => setaccountNumber(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-xs-12 col-sm-6 mb-3">
          <label className="form-label">Qualification</label>
          <input
            name="lastschool"
            value={qualification}
            onChange={(e) => setqualification(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label">Years with School</label>
          <input
            name="years"
            value={years}
            onChange={(e) => setyears(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="col-xs-12 col-sm-6  mb-3">
          <label className="form-label">Class</label>
          <select
            name="campus"
            value={classID}
            onChange={(e) => setclass(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue hidden>
              select
            </option>
            {classes.length > 0 ? (
              classes.map((e) => (
                <option key={e.classCode} value={e.classCode}>
                  {e.name}
                </option>
              ))
            ) : (
              <option disabled>No data yet</option>
            )}
          </select>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <label className="form-label">Courses</label>
          <div className="selectBox">
            <select
              onClick={() => setshowCheck(!showCheck)}
              className="form-select"
            >
              <option hidden>Select options</option>
            </select>
            {showCheck && (
              <div className="showcheckboxes">
                {courses.length > 0 ? (
                  <>
                    {courses.map((e) => (
                      <div key={e.code} value={e.code} className="form-check ">
                        <input
                          onChange={handleCoursesCheckbox}
                          className="form-check-input"
                          type="checkbox"
                          value={e.code}
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">{e.name}</label>
                      </div>
                    ))}
                  </>
                ) : (
                  <option disabled>No data yet</option>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
