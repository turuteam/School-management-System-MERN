import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../store/axios";
import PrintIcon from "@material-ui/icons/Print";

function ReportCard() {
  const { id, year, term } = useParams();
  const [results, setresults] = useState([]);
  const [user, setuser] = useState({});

  useEffect(() => {
    const getData = async () => {
      let student = await axios.get(`/students/student/${id}`);
      setuser(student.data.student);
      await axios.get(`sba/student/${id}/${year}/${term}`).then((res) => {
        setresults(res.data.docs);
        console.log(res.data.docs);
      });
    };
    getData();
  }, [id, year, term]);

  const handlePrint = () => {
    window.print();
  };

  const getTotal = (exams, work) => {
    return Number(exams || 0) + Number(work || 0);
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-2">
        <button onClick={handlePrint} className="btn blue__btn">
          <PrintIcon />
          Print
        </button>
      </div>
      <div id="section-to-print">
        <div className=" mb-5">
          <div>
            <h5>Report Card</h5>
            <h6>
              Name: {user?.name} {user?.middleName} {user?.surname} - {id}
            </h6>
            <h6>Class: {user?.classID}</h6>
            <h6> Year: {year}</h6>
            <h6>Term:{term}</h6>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Courses</th>
              <th scope="col">Classwork</th>
              <th scope="col">Exam</th>
              <th scope="col">Total</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((res) => (
                <tr key={res?._id}>
                  <td>{res?.course}</td>
                  <td>{res.classWork}</td>
                  <td>{res?.exam || "-"}</td>
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
    </>
  );
}

export default ReportCard;
