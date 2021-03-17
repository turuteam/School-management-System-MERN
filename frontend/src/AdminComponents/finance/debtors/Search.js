import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  selectYearGroup,
  selectCampuses,
  selectClasses,
} from "../../../store/slices/schoolSlice";

function Search({
  year,
  setyear,
  term,
  setterm,
  listby,
  setlistby,
  filterBy,
  setfilterBy,
  amount,
  setamount,
  pastStudents,
  setpastStudents,
  withdrawStudent,
  setwithdrawStudent,
  handleSearch,
  setlistValue,
  listValue,
  filterValue,
  setfilterValue,
  loading,
}) {
  const { register, handleSubmit, errors } = useForm();
  const years = useSelector(selectYearGroup);
  const classes = useSelector(selectClasses);
  const campus = useSelector(selectCampuses);

  return (
    <form action="" className="row">
      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">Academic Year</label>
        <div className="">
          <select
            value={year}
            ref={register({ required: true })}
            onChange={(e) => setyear(e.target.value)}
            name="year"
            className="form-select"
          >
            <option hidden defaultValue>
              Choose...
            </option>
            {years &&
              years.map((e) => (
                <option key={e.year} value={e.year}>
                  {e.year}
                </option>
              ))}
          </select>
        </div>
        {errors.year && (
          <span className=" form-error text-danger mb-2">
            This field is required
          </span>
        )}
      </div>
      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">Term</label>
        <div className="">
          <select
            value={term}
            ref={register({ required: true })}
            onChange={(e) => setterm(e.target.value)}
            name="term"
            className="form-select"
          >
            <option hidden defaultValue>
              Choose...
            </option>
            <option value="1">1st</option>
            <option value="1">2rd</option>
            <option value="1">3rd</option>
          </select>
        </div>
      </div>
      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">List By</label>
        <div className="">
          <select
            value={listby}
            ref={register({ required: true })}
            onChange={(e) => setlistby(e.target.value)}
            name="term"
            className="form-select"
          >
            <option defaultValue value="all">
              All
            </option>
            <option value="class">Class</option>
            <option value="campus">Campus</option>
          </select>
        </div>
      </div>
      {listby === "class" && (
        <div className="col-sm-6 col-mb-4 mb-3">
          <label className="col-form-label">Class</label>
          <div className="">
            <select
              value={listValue}
              ref={register({ required: true })}
              onChange={(e) => setlistValue(e.target.value)}
              name="term"
              className="form-select"
            >
              <option hidden defaultValue>
                Select
              </option>
              {classes &&
                classes.map((e) => (
                  <option key={e.classCode} value={e.classCode}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}
      {listby === "campus" && (
        <div className="col-sm-6 col-mb-4 mb-3">
          <label className="col-form-label">Campus</label>
          <div className="">
            <select
              value={listValue}
              ref={register({ required: true })}
              onChange={(e) => setlistValue(e.target.value)}
              name="term"
              className="form-select"
            >
              <option hidden defaultValue>
                Select
              </option>
              {campus &&
                campus.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}
      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">Filter By</label>
        <div className="">
          <select
            value={filterBy}
            ref={register({ required: true })}
            onChange={(e) => setfilterBy(e.target.value)}
            name="filterby"
            className="form-select"
          >
            <option hidden defaultValue>
              Select
            </option>
            <option value="amount">Amount Paid</option>
            <option value="percentage">Percentage Paid</option>
          </select>
        </div>
      </div>
      {filterBy === "amount" && (
        <div className="col-sm-6 col-mb-4 mb-3">
          <label className="col-form-label">Amount Paid</label>
          <div className="row">
            <select
              value={filterValue}
              ref={register({ required: true })}
              onChange={(e) => setfilterValue(e.target.value)}
              name="filterby"
              className="form-select col"
            >
              <option hidden defaultValue>
                Select
              </option>
              <option value="amount">less than</option>
              <option value="percentage">greater than</option>
            </select>
            <input
              placeholder="Amount"
              type="number"
              className="form-control col"
            />
          </div>
        </div>
      )}
      {filterBy === "percentage" && (
        <div className="col-sm-6 col-mb-4 mb-3">
          <label className="col-form-label">Amount Paid</label>
          <div className="row">
            <select
              value={filterValue}
              ref={register({ required: true, min: 0, max: 100 })}
              onChange={(e) => setfilterValue(e.target.value)}
              name="filterby"
              className="form-select col"
            >
              <option hidden defaultValue>
                Select
              </option>
              <option value="amount">less than</option>
              <option value="percentage">greater than</option>
            </select>
            <input
              placeholder="Amount"
              type="number"
              className="form-control col"
            />
          </div>
        </div>
      )}

      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">Past Students</label>
        <div className="">
          <select
            value={pastStudents}
            ref={register({ required: true, min: 0, max: 100 })}
            onChange={(e) => setpastStudents(e.target.value)}
            name="filterby"
            className="form-select col"
          >
            <option defaultValue value="dont">
              Don't include past students
            </option>
            <option value="include">Include past students</option>
            <option value="show">Don't include past students </option>
          </select>
        </div>
      </div>

      <div className="col-sm-6 col-mb-4 mb-3">
        <label className="col-form-label">Withdrawn Students Students</label>
        <div className="">
          <select
            value={withdrawStudent}
            ref={register({ required: true, min: 0, max: 100 })}
            onChange={(e) => setwithdrawStudent(e.target.value)}
            name="filterby"
            className="form-select col"
          >
            <option defaultValue value="dont">
              Don't include withdrawn students
            </option>
            <option value="include">Include withdrawn students</option>
            <option value="show">Don't include withdrawn students </option>
          </select>
        </div>
      </div>

      <div className="col-sm-6 col-mb-4 mb-3">
        <div className="">
          <button
            disabled={loading}
            onClick={handleSubmit(handleSearch)}
            className="btn blue__btn"
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
