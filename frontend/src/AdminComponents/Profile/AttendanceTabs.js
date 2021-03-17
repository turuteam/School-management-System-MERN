import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectClasses } from "../../store/slices/schoolSlice";
import { Bar } from "@reactchartjs/react-chart.js";
import { monthYear } from "../../data";
import moment from "moment";
import axios from "../../store/axios";

const date = new Date();
const month = date.getMonth();
var year = date.getFullYear();
var daysInMonth = new Date(year, month + 1, 0).getDate();
var start = new Date(year, month, 1);

function AttendanceTabs() {
  const [dates, setdates] = useState([]);
  const [datas, setdatas] = useState([]);
  const [period, setperiod] = useState("");
  const [classID, setclassID] = useState("");
  const classes = useSelector(selectClasses);
  const [loading, setloading] = useState("");

  useEffect(() => {
    let arr = [];
    let d = [];
    for (var i = 0; i < daysInMonth; i++) {
      arr.push(moment(start).add(i, "day").format("dd D MMM YYYY"));
      d.push(Math.floor(Math.random() * Math.floor(100)));
    }
    setdates(arr);
    //setdatas(d);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios.get("/count/attendance").then((res) => {
      setdatas(res.data.map((e) => e.value));
    });
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Attendance",
        data: datas,
        backgroundColor: "#051f3e",
        borderColor: "#051f3e",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="content__container mb-3">
        <form action="" className="row">
          <div className="mb-3 col-sm-4">
            <label className="form-label">Class</label>
            <select
              name="type"
              value={classID}
              onChange={(e) => setclassID(e.target.value)}
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
                <option disabled>No class yet</option>
              )}
            </select>
          </div>
          <div className="mb-3 col-sm-4">
            <label className="form-label">Period</label>
            <select
              name="type"
              value={period}
              onChange={(e) => setperiod(e.target.value)}
              id="inputState"
              className="form-select"
            >
              <option defaultValue hidden>
                Choose...
              </option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="thisweek">This Week</option>
              <option value="lastweek">Last Week</option>
              <option value="thismonth">This Month</option>
              <option value="lastmonth">Last Month</option>
            </select>
          </div>
          <div className="mb-3 col-sm-4">
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
      </div>
      <h3 className="mb-5">
        Attendance Report for {monthYear[month]?.name} {year}
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default AttendanceTabs;
