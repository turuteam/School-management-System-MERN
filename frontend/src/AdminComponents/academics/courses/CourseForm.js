import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../store/axios";
import { useSelector } from "react-redux";
import {
  selectDepartments,
  selectClasses,
} from "../../../store/slices/schoolSlice";

function CourseForm(props) {
  const [teachers, setteachers] = useState([]);
  const departments = useSelector(selectDepartments);
  const classes = useSelector(selectClasses);
  useEffect(() => {
    axios.get("/teachers").then((res) => {
      setteachers(res.data);
      console.log(res.data);
    });
  }, []);

  const { register, handleSubmit, errors } = useForm();
  let {
    type,
    teacher,
    setteacher,
    settype,
    name,
    setname,
    code,
    setcode,
    onSubmit,
    loading,
    isEdit,
    classID,
    handleSetclasses,
  } = props;

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Course Name</label>
        <input
          type="text"
          value={name}
          ref={register({ required: true })}
          onChange={(e) => setname(e.target.value)}
          className="form-control"
          name="name"
        />
        {errors.name && (
          <span className=" form-error text-danger mb-2">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Course Code</label>
        <input
          type="text"
          value={code}
          ref={register({ required: true })}
          onChange={(e) => setcode(e.target.value)}
          className="form-control"
          name="code"
        />
        {errors.code && (
          <span className="form-error text-danger mb-2">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Departments</label>
        <select
          name="type"
          value={type}
          onChange={(e) => settype(e.target.value)}
          id="inputState"
          className="form-select"
        >
          <option defaultValue hidden>
            Choose...
          </option>
          {departments.length > 0 ? (
            departments.map((e) => (
              <option key={e._id} value={e.code}>
                {e.name}
              </option>
            ))
          ) : (
            <option disabled>No departments yet</option>
          )}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Classes</label>
        <select
          name="type"
          value={classID}
          onChange={(e) => handleSetclasses(e.target.value)}
          id="inputState"
          className="form-select"
        >
          <option defaultValue hidden>
            Choose...
          </option>
          {classes.length > 0 ? (
            classes.map((e) => (
              <option key={e._id} value={e.classCode}>
                {e.name}
              </option>
            ))
          ) : (
            <option disabled>No departments yet</option>
          )}
        </select>
      </div>

      <div className="mb-5">
        <label className="form-label">Course Teacher</label>
        <select
          name="type"
          value={teacher}
          onChange={(e) => setteacher(e.target.value)}
          id="inputState"
          className="form-select"
        >
          <option defaultValue hidden>
            Choose...
          </option>
          {teachers.length > 0 ? (
            teachers.map((e) => (
              <option key={e?.userID} value={e?.userID}>
                {e.name} {e.surname}
              </option>
            ))
          ) : (
            <option disabled>No data</option>
          )}
        </select>
      </div>
      <div className="mb-3">
        <button disabled={loading} type="submit" className="btn blue__btn">
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isEdit ? "Save Changes" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default CourseForm;
