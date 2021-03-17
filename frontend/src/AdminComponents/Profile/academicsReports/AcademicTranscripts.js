import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../store/axios";
import { getImgSrc, errorAlert } from "../../../utils";
import Excel from "../../../components/tables/ExcelExport";
import { selectYearGroup } from "../../../store/slices/schoolSlice";

function AcademicTranscripts() {
  const [options, setoptions] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [studentID, setstudentID] = useState("");
  const [loading, setloading] = useState("");
  const [show, setshow] = useState(false);
  const [school, setschool] = useState({});
  const [data, setdata] = useState([]);
  const [studentDetails, setstudentDetails] = useState({});

  const years = useSelector(selectYearGroup);

  useEffect(() => {
    axios.get("/school").then((res) => {
      setschool(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!studentID) {
      return errorAlert("select student");
    }
    axios.get(`/students/student/${studentID}`).then((res) => {
      if (res.data.error) {
        return errorAlert("Student does not exist");
      }
      setstudentDetails(res.data.student);
      setshow(true);
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
    <div className="content__container">
      <h3>Academic Transcript</h3>
      <form action="" className="row">
        <div className="mb-3 col-sm-4">
          <label className="form-label">From</label>
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
            {years.length > 0 ? (
              years.map((e) => (
                <option key={e._id} value={e.year}>
                  {e.name}
                </option>
              ))
            ) : (
              <option disabled>No data yet</option>
            )}
          </select>
        </div>
        <div className="mb-3 col-sm-4">
          <label className="form-label">To</label>
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
                  {e.name}
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
        <div className="mb-3 col-sm-4">
          <label className="form-label">Options</label>
          <select
            name="type"
            value={options}
            onChange={(e) => setoptions(e.target.value)}
            id="inputState"
            className="form-select"
          >
            <option defaultValue hidden>
              Choose...
            </option>
            <option value="mark">Mark only</option>
            <option value="mark">Grades only</option>
            <option value="mark">Both</option>
          </select>
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
        <div id="section-to-print">
          <div className="text-center">
            <img width="100px" src={getImgSrc(school?.profileUrl)} alt="" />
            <h5>
              <strong>{school?.fullName}</strong>
            </h5>
            <h6>{school?.motto}</h6>
            <h5 className="my-4">STUDENT TRANSCRIPT</h5>
          </div>
          <div className="text-center">
            <h6>
              {studentDetails?.name} {studentDetails?.surname}
            </h6>
            <div>
              {from} - {to}
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th colSpan={3}>
                  {from}- {to}
                </th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col">Term 1</th>
                <th scope="col">Term 2</th>
                <th scope="col">Term 3</th>
              </tr>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Mark</th>
                <th scope="col">Mark</th>
                <th scope="col">Mark</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((e) => (
                  <tr>
                    <th scope="row">{e?.subject}</th>
                    <td>{e?.term1}</td>
                    <td>{e?.term2}</td>
                    <td>{e?.term3}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="my-3 text-center">
        <button onClick={handlePrint} className="btn blue__btn mr-2">
          Print
        </button>
        <Excel data={data} columns={columns} btn="save" />
      </div>
    </div>
  );
}

export default AcademicTranscripts;
