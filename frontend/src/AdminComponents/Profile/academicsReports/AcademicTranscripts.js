import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../store/axios";
import { getImgSrc, errorAlert } from "../../../utils";
import Excel from "../../../components/tables/ExcelExport";
import {
  selectYearGroup,
  selectacademicYear,
} from "../../../store/slices/schoolSlice";

function AcademicTranscripts() {
  const years = useSelector(selectYearGroup);
  const current = useSelector(selectacademicYear);
  const [from, setfrom] = useState(current.currentTerm);
  const [to, setto] = useState(current.currentYear);
  const [studentID, setstudentID] = useState("");
  const [loading, setloading] = useState("");
  const [show, setshow] = useState(false);
  const [school, setschool] = useState({});
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);

  const [studentDetails, setstudentDetails] = useState({});

  useEffect(() => {
    axios.get("/school").then((res) => {
      setschool(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    seterror(false);
    e.preventDefault();
    if (!studentID) {
      return errorAlert("select student");
    }
    setloading(true);
    axios.get(`sba/student/${studentID}/${to}/${from}`).then(async (res) => {
      let student = await axios.get(`/students/student/${studentID}`);
      console.log(student);
      setloading(false);
      setshow(true);
      if (student.data.error) {
        return seterror(true);
      }
      setstudentDetails(student.data.student);
      setloading(false);

      if (res.data.error) {
        return errorAlert("Student does not exist");
      }
      setdata(res.data.docs);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const columns = [
    { id: "subject", name: "Subject" },
    { id: "term", name: "Term" },
    { id: "mark", name: "Mark" },
  ];

  return (
    <div>
      <h3>Academic Transcript</h3>
      <form action="" className="row content__container">
        <div className="mb-3 col-sm-4">
          <label className="form-label">Term</label>
          <select
            name="type"
            value={from}
            onChange={(e) => setfrom(e.target.value)}
            id="inputState"
            className="form-select"
          >
            <option defaultValue hidden>
              Choose...
            </option>
            <option value="1">1st</option>
            <option value="2">2rd</option>
            <option value="3">3rd</option>
          </select>
        </div>
        <div className="mb-3 col-sm-4">
          <label className="form-label">Year</label>
          <select
            name="type"
            value={to}
            onChange={(e) => setto(e.target.value)}
            id="inputState"
            className="form-select"
          >
            <option defaultValue hidden>
              Choose...
            </option>
            {years.length > 0 ? (
              years.map((e) => (
                <option key={e._id} value={e.year}>
                  {e.year}
                </option>
              ))
            ) : (
              <option disabled>No data yet</option>
            )}
          </select>
        </div>
        <div className="mb-3 col-sm-4">
          <label className="form-label">Student ID</label>
          <input
            value={studentID}
            onChange={(e) => setstudentID(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <button
            onClick={handleSearch}
            disabled={loading}
            type="submit"
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
      </form>

      {show && (
        <div className="content__container mt-4" id="section-to-print">
          <div className="text-center">
            <h5>
              <strong>{school?.fullName}</strong>
            </h5>
            <h6>{school?.motto}</h6>
            <h5 className="my-4">
              STUDENT TRANSCRIPT FOR {studentDetails?.userID}
            </h5>
          </div>
          {error ? (
            <div>
              {" "}
              <h3 className="text-center text-danger">Student Not found</h3>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h6>
                  {studentDetails?.name} {studentDetails?.surname}
                </h6>
                <div>
                  Term {from} - Year {to}
                </div>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Final Score</th>
                    <th scope="col">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((e) => (
                      <tr>
                        <th scope="row">{e?.course}</th>
                        <td>{e?.exam + e.classWork}</td>
                        <td>{e?.position}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center">
                        No Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="my-3 text-center">
                <button onClick={handlePrint} className="btn blue__btn mr-2">
                  Print
                </button>
                <Excel data={data} columns={columns} btn="save" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default AcademicTranscripts;
