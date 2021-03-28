import React, { useState, useEffect } from "react";
import Table from "./ReportTable";
import { useParams } from "react-router-dom";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectacademicYear } from "../../store/slices/schoolSlice";
import PrintIcon from "@material-ui/icons/Print";
import Loading from "../../Loading";

function CourseReport() {
  const [students, setstudents] = useState([]);
  const { id, classID } = useParams();
  const currentYear = useSelector(selectacademicYear);
  const [loading, setloading] = useState("");

  console.log(currentYear);

  useEffect(() => {
    axios
      .get(
        `/sba/class/${classID}/${currentYear?.currentYear}/${currentYear?.currentTerm}`
      )
      .then((result) => {
        setloading(false);
        let data = result.data.docs[0];
        console.log(result.data.docs[0]);
        setstudents(data.students);
      });
  }, [currentYear, classID]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="content__container">
      {loading && <Loading />}
      <button onClick={handlePrint} className="btn blue__btn float-right">
        Print <PrintIcon />
      </button>
      <div className=" mb-3" id="section-to-print">
        <div>
          <h3>
            Class {classID} for Course {id}
          </h3>
          <h6>
            <strong>
              Term: {currentYear?.term} Year: {currentYear?.year}
            </strong>
          </h6>
        </div>
        <Table rows={students} classID={classID} course={id} />
      </div>
    </div>
  );
}

export default CourseReport;
