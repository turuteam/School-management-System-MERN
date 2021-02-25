import React, { useState, useEffect } from "react";
import Search from "../../shared/Search";
import Table from "../../shared/AttendanceTable";
import { Link } from "react-router-dom";
import axios from "../../../store/axios";

function Attendance() {
  const [month, setmonth] = useState("");
  const [attendanceData, setattendanceData] = useState([]);
  const [storeData, setstoreData] = useState([]);

  useEffect(() => {
    axios.get("/attendance/staff").then((res) => {
      setattendanceData(res.data);
      setstoreData(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let newClasses = [];
    if (month) {
      //let today = new Date()
      console.log(new Date(month).toISOString().substring(0, 10));
      newClasses = newClasses.filter((i) =>
        i?.date
          ?.substring(0, 10)
          .includes(new Date(month).toISOString().substring(0, 10))
      );
    }
    setattendanceData(newClasses);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setmonth("");
    setattendanceData(storeData);
  };

  const inputFields = [
    {
      type: "date",
      label: "Search by Month",
      value: month,
      name: "month",
      onChange: setmonth,
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-8">
          <Search
            handleSearch={handleSearch}
            handleReset={handleReset}
            title="Staff's Attendance"
            inputFields={inputFields}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Link to="/attendance/staff/register" className="btn blue__btn">
            Register Attendance
          </Link>
        </div>
      </div>

      <Table isStaff={true} attendanceData={attendanceData} />
    </div>
  );
}

export default Attendance;
