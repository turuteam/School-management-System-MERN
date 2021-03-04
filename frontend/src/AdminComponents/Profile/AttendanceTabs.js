import React, { useState, useEffect } from "react";
//import { Chart } from "react-chartjs-2";
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
      <h3 className="mb-5">
        Attendance Report for {monthYear[month]?.name} {year}
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default AttendanceTabs;
