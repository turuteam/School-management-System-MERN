import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { selectYearGroup } from "../../store/slices/schoolSlice";
import axios from "../../store/axios";
import PrintIcon from "@material-ui/icons/Print";
import Search from "./Search";

function ReportCard() {
  const [results, setresults] = useState([]);
  const currentUser = useSelector(selectUser);
  const [user, setuser] = useState({});
  const [show, setshow] = useState(false);
  const [year, setyear] = useState("");
  const years = useSelector(selectYearGroup);
  const [term, setterm] = useState("");
  const [loading, setloading] = useState(false);
  const [selectedterm, setselectedterm] = useState("");
  const [selectedyear, setselectedyear] = useState("");

  useEffect(() => {
    const getData = async () => {
      let student = await axios.get(`/students/student/${currentUser?.userID}`);
      setuser(student.data.student);
    };
    getData();
  }, [currentUser]);

  const handlePrint = () => {
    window.print();
  };

  const getTotal = (exams, work) => {
    return Number(exams || 0) + Number(work || 0);
  };

  const handleSearch = async (e) => {
    setloading(true);
    e.preventDefault();
    await axios
      .get(`sba/student/${currentUser?.userID}/${year}/${term}`)
      .then((res) => {
        setloading(false);
        setshow(true);
        setselectedterm(term);
        setselectedyear(year);
        setresults(res.data.docs);
        console.log(res.data.docs);
      });
  };

  return (
    <>
      <div className="mb-5">
        <Search
          yearGroup={years}
          academicYear={year}
          setacademicYear={setyear}
          term={term}
          setterm={setterm}
          loading={loading}
          handleSearch={handleSearch}
        />
      </div>
      {show && (
        <>
          <div id="section-to-print" className="content__container my-5">
            <div className=" mb-5">
              <div>
                <h5>Report Card</h5>
                <h6>
                  Name: {user?.name} {user?.middleName} {user?.surname} -{" "}
                  {user?.userID}
                </h6>
                <h6>Class: {user?.classID}</h6>
                <h6> Year: {selectedyear}</h6>
                <h6>Term:{selectedterm}</h6>
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
          </div>{" "}
          <div className="d-flex justify-content-center mb-5">
            <button onClick={handlePrint} className="btn blue__btn">
              <PrintIcon />
              Print
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ReportCard;
