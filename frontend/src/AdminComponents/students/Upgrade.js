import React, { useState } from "react";
import {
  selectClasses,
  selectDormitories,
  selectCampuses,
} from "../../store/slices/schoolSlice";
import { useSelector } from "react-redux";
import axios from "../../store/axios";
import { errorAlert, successAlert } from "../../utils";

function Upgrade() {
  const classes = useSelector(selectClasses);
  const dormitories = useSelector(selectDormitories);
  const campuses = useSelector(selectCampuses);
  const [currentclass, setcurrentclass] = useState("");
  const [nextclass, setnextclass] = useState("");
  const [currentdormitories, setcurrentdormitories] = useState("");
  const [nextdormitories, setnextdormitories] = useState("");
  const [currentcampus, setcurrentcampus] = useState("");
  const [nextcampus, setnextcampus] = useState("");
  const [classStudents, setclassStudents] = useState("");
  const [student, setstudent] = useState("");
  const [oldClass, setoldClass] = useState("");
  const [loadingStudents, setloadingStudents] = useState("");
  const [newClass, setnewClass] = useState("");
  const [loading, setloading] = useState({
    classes: false,
    dormitories: false,
    campuses: false,
  });
  const [errors, seterrors] = useState({
    classes: false,
    dormitories: false,
    campuses: false,
  });

  const handleSelectClassStudents = (e) => {
    setoldClass(e.target.value);
    setloadingStudents(true);
    axios.get(`/students/class/${e.target.value}`).then((res) => {
      setloadingStudents(false);
      setclassStudents(res.data.users);
    });
    // setclassStudents()
  };

  const handleChangeStudentClass = (e) => {
    e.preventDefault();
    if (!student) {
      return errorAlert("Please select student");
    }
    if (!newClass) {
      return errorAlert("Please select new class");
    }
    axios
      .put(`/students/update/${student}`, { classID: newClass })
      .then(async (res) => {
        if (res.data.error) {
          return errorAlert(res.data.error);
        }
        successAlert("Changes successfully saved");
        setoldClass("");
        setnewClass("");
        setstudent("");
        await axios.post("/activitylog/create", {
          activity: `student ${student} was moved to class ${newClass}`,
          user: "admin",
        });
      });
  };

  const handleChangeClasses = (e) => {
    e.preventDefault();
    seterrors({ ...errors, classes: false });
    if (currentclass === "" || nextclass === "") {
      seterrors({ ...errors, classes: true });
      return 0;
    } else {
      setloading({ ...loading, classes: true });
      axios
        .post("/students/upgrade/class", { currentclass, nextclass })
        .then(async (res) => {
          setloading({ ...loading, classes: false });
          if (res.data.error) {
            errorAlert(res.data.error);
            return 0;
          }
          successAlert("Changes are successfully done");
          await axios.post("/activitylog/create", {
            activity: `students in class ${currentclass} were moved to class ${nextclass}`,
            user: "admin",
          });
          setcurrentclass("");
          setnextclass("");
        })
        .catch((err) => {
          console.log(err);
          setloading({ ...loading, classes: false });
          errorAlert("something went wrong");
        });
    }
  };

  const handleChangeCampuse = (e) => {
    e.preventDefault();
    seterrors({ ...errors, classes: false });
    if (currentcampus === "" || nextcampus === "") {
      seterrors({ ...errors, campuses: true });
      return 0;
    } else {
      setloading({ ...loading, classes: true });
      axios
        .post("/students/upgrade/campus", { currentcampus, nextcampus })
        .then(async (res) => {
          setloading({ ...loading, campuses: false });
          if (res.data.error) {
            errorAlert(res.data.error);
            return 0;
          }
          successAlert("Changes are successfully done");
          setcurrentcampus("");
          setnextcampus("");
          await axios.post("/activitylog/create", {
            activity: `students in campus ${currentcampus} were moved to campus ${nextcampus}`,
            user: "admin",
          });
        })
        .catch((err) => {
          console.log(err);
          setloading({ ...loading, campuses: false });
          errorAlert("something went wrong");
        });
    }
  };

  const handleChangeDormitories = (e) => {
    e.preventDefault();
    seterrors({ ...errors, dormitories: false });
    if (currentdormitories === "" || nextdormitories === "") {
      seterrors({ ...errors, dormitories: true });
      return 0;
    } else {
      setloading({ ...loading, dormitories: true });
      axios
        .post("/students//upgrade/dormitories", {
          currentdormitories,
          nextdormitories,
        })
        .then(async (res) => {
          setloading({ ...loading, dormitories: false });
          if (res.data.error) {
            errorAlert(res.data.error);
            return 0;
          }
          successAlert("Changes are successfully done");
          setcurrentdormitories("");
          setnextdormitories("");
          await axios.post("/activitylog/create", {
            activity: `dormitory ${currentdormitories} were moved to dormitory ${nextdormitories}`,
            user: "admin",
          });
        })
        .catch((err) => {
          console.log(err);
          setloading({ ...loading, dormitories: false });
          errorAlert("something went wrong");
        });
    }
  };

  const handleCancelClass = (e) => {
    e.preventDefault();
    setcurrentclass("");
    setnextclass("");
    seterrors({ ...errors, classes: false });
  };

  const handleCancelDormitories = (e) => {
    e.preventDefault();
    setcurrentdormitories("");
    setnextdormitories("");
    seterrors({ ...errors, dormitories: false });
  };

  const handleCancelCampus = (e) => {
    e.preventDefault();
    setcurrentcampus("");
    setnextcampus("");
    seterrors({ ...errors, campuses: false });
  };

  return (
    <div>
      <h3 className="mb-5">Student Promotion</h3>
      <form action="">
        <div className="content__container mb-5">
          <div className="col-12 ">
            <h3 className="mb-4">Promoting Student to another Class</h3>
          </div>
          <div className="row">
            <div className="mb-2">
              <label>Select Class</label>
              <select
                name="class"
                value={oldClass}
                onChange={handleSelectClassStudents}
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue hidden>
                  select
                </option>
                {classes?.length > 0 ? (
                  classes.map((e) => (
                    <option key={e.classCode} value={e.classCode}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  ))
                ) : (
                  <option disabled>No options yet</option>
                )}
              </select>
            </div>
            {loadingStudents && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {oldClass && (
              <>
                <div className="mb-2">
                  <label>Select Student</label>
                  <select
                    name="class"
                    value={student}
                    onChange={(e) => setstudent(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue hidden>
                      select
                    </option>
                    {classStudents?.length > 0 ? (
                      classStudents.map((e) => (
                        <option key={e.userID} value={e.userID}>
                          {" "}
                          {e?.name} {e?.surname}
                        </option>
                      ))
                    ) : (
                      <option disabled>No options yet</option>
                    )}
                  </select>
                </div>
                <div className="mb-2">
                  <label>Select Move to</label>
                  <select
                    name="class"
                    value={newClass}
                    onChange={(e) => setnewClass(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue hidden>
                      select
                    </option>
                    {classes?.length > 0 ? (
                      classes.map((e) => (
                        <option key={e.classCode} value={e.classCode}>
                          {" "}
                          {e.name}{" "}
                        </option>
                      ))
                    ) : (
                      <option disabled>No options yet</option>
                    )}
                  </select>
                </div>
              </>
            )}
            <div className="col-xs-12 col-sm-6   mb-2 mt-4">
              <button
                disabled={loading.classes}
                className="btn blue__btn mr-3"
                onClick={handleChangeStudentClass}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
      <form className="content__container mb-5">
        <div className="row mb-5 aligh-items-center">
          <div className="col-12 ">
            <h3 className="mb-4">Promoting Students to the next Class</h3>
          </div>
          <div className="col-xs-12 col-sm-6   mb-2">
            <label>Current Class</label>
            <select
              name="class"
              value={currentclass}
              onChange={(e) => setcurrentclass(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {classes?.length > 0 ? (
                classes.map((e) => (
                  <option key={e.classCode} value={e.classCode}>
                    {" "}
                    {e.name}{" "}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          <div className="col-xs-12 col-sm-6   mb-2">
            <label>Promote Class</label>
            <select
              name="class"
              value={nextclass}
              onChange={(e) => setnextclass(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {classes?.length > 0 ? (
                classes.map((e) => (
                  <option key={e.classCode} value={e.classCode}>
                    {" "}
                    {e.name}{" "}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          {errors.classes && (
            <div className="text-danger"> Please select all field </div>
          )}
          <div className="col-xs-12 col-sm-6   mb-2 mt-4">
            <button
              disabled={loading.classes}
              className="btn blue__btn mr-3"
              onClick={handleChangeClasses}
            >
              Save Changes
            </button>
            <button className="btn btn-danger" onClick={handleCancelClass}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      <form className="content__container mb-5">
        <div className="row mb-5 aligh-items-center">
          <div className="col-12 ">
            <h3 className="mb-4">Promoting Students to another Campus</h3>
          </div>
          <div className="col-xs-12 col-sm-6 ">
            <label>Current Campus</label>
            <select
              name="campus"
              value={currentcampus}
              onChange={(e) => setcurrentcampus(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {campuses.length > 0 ? (
                campuses.map((campus) => (
                  <option value={campus._id} key={campus._id}>
                    {campus.name}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          <div className="col-xs-12 col-sm-6 ">
            <label>Promote Campus</label>
            <select
              name="nextcampus"
              value={nextcampus}
              onChange={(e) => setnextcampus(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {campuses.length > 0 ? (
                campuses.map((campus) => (
                  <option value={campus._id} key={campus._id}>
                    {campus.name}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          {errors.campuses && (
            <div className="text-danger"> Please select all field </div>
          )}
          <div className="col-xs-12 col-sm-6   mb-2 mt-4">
            <button
              disabled={loading.campuses}
              className="btn blue__btn mr-3"
              onClick={handleChangeCampuse}
            >
              Save Changes
            </button>
            <button className="btn btn-danger" onClick={handleCancelCampus}>
              Cancel
            </button>
          </div>
        </div>
      </form>

      <form action="" className="content__container mb-5">
        <div className="row mb-5 aligh-items-center">
          <div className="col-12 ">
            <h3 className="mb-4">Promoting Students to another Dormitories</h3>
          </div>
          <div className="col-xs-12 col-sm-6 ">
            <label>Current Dormitory</label>
            <select
              name="dormitories"
              value={currentdormitories}
              onChange={(e) => setcurrentdormitories(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {dormitories.length > 0 ? (
                dormitories.map((e) => (
                  <option value={e._id} key={e._id}>
                    {e.name}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          <div className="col-xs-12 col-sm-6 ">
            <label>Promote Dormitory</label>
            <select
              name="nextdormitory"
              value={nextdormitories}
              onChange={(e) => setnextdormitories(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option defaultValue hidden>
                select
              </option>
              {dormitories.length > 0 ? (
                dormitories.map((e) => (
                  <option value={e._id} key={e._id}>
                    {e.name}
                  </option>
                ))
              ) : (
                <option disabled>No options yet</option>
              )}
            </select>
          </div>
          {errors.dormitories && (
            <div className="text-danger"> Please select all field </div>
          )}
          <div className="col-xs-12 col-sm-6   mb-2 mt-4">
            <button
              disabled={loading.dormitories}
              className="btn blue__btn mr-3"
              onClick={handleChangeDormitories}
            >
              Save Changes
            </button>
            <button
              className="btn btn-danger"
              onClick={handleCancelDormitories}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upgrade;
