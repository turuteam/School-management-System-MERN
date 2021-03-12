import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../store/axios";
import PrintIcon from "@material-ui/icons/Print";

function ReportCard() {
  const { id, year, term } = useParams();
  const [results, setresults] = useState([]);
  const [user, setuser] = useState({});

  useEffect(() => {
    axios.get(`sba/student/${id}/${year}/${term}`).then((res) => {
      console.log(res);
      setresults(res.data.docs);
    });
  }, [id, year, term]);

  useEffect(() => {
    axios.get(`/students/student/${id}`).then((res) => {
      console.log(res);
      setuser(res.data.student);
    });
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const calculateClassWork = (obj) => {
    if (obj) {
      let total = 40;
      let sum = Object.values(obj).reduce((t, { value }) => t + value, 0);
      return (sum / total) * (100 / 2) || 0;
    }
    return 0;
  };

  const getTotal = (exams, work) => {
    if (exams && work) {
      let classwork = calculateClassWork(work);
      return exams / 2 + classwork;
    }
    return 0;
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <div>
          <h5>Report Card</h5>
          <h6>
            Name: {user?.name} {user?.middleName} {user?.surname} - {id}
          </h6>
          <h6>Class: {user?.classID}</h6>
          <h6> Year: {year}</h6>
          <h6>Term:{term}</h6>
        </div>
        <div>
          <button onClick={handlePrint} className="btn blue__btn">
            <PrintIcon />
            Print
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Courses</th>
            <th colSpan={5} scope="col">
              Classwork
            </th>
            <th colSpan={2} scope="col">
              Exam
            </th>
            <th scope="col">Total</th>
            <th scope="col">Position</th>
          </tr>
          <tr className="table-sm">
            <th scope="col"></th>
            <th scope="col">A1</th>
            <th scope="col">A2</th>
            <th scope="col">A3</th>
            <th scope="col">A4</th>
            <th scope="col">Average</th>
            <th scope="col">100%</th>
            <th scope="col">50%</th>
            <th scope="col">Final Score</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((res) => (
              <tr key={res?._id}>
                <td>{res?.course}</td>
                <td>{res.classWork?.a1}</td>
                <td>{res.classWork?.a2}</td>
                <td>{res.classWork?.a3}</td>
                <td>{res.classWork?.a4}</td>
                <td>{calculateClassWork(res.classWork)}</td>
                <td>{res?.exam || "-"}</td>
                <td>{res?.exam / 2}</td>
                <td>{getTotal(res?.exam, res.classWork)}</td>
                <td>{res?.position || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10} className="text-center text-danger">
                <h5>No data yet</h5>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReportCard;
