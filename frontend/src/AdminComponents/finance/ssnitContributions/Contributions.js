import React, { useState, useEffect } from "react";
import Table from "./Table";
import axios from "../../../store/axios";
//import Loading from "../../../Loading";
import { monthYear } from "../../../data";
import { getYearsPast, errorAlert } from "../../../utils";
import Export from "../../../components/tables/ExcelExport";

const tableHeader = [
  { id: "userID", name: "Staff ID" },
  { id: "taxNumber", name: "SSNIT Number" },
  { id: "name", name: "Name" },
  { id: "surname", name: "Surname" },
  { id: "position", name: "Staff Position" },
  { id: "tax", name: "5% Contribution" },
  { id: "salary", name: "Salary" },
];

function Contributions() {
  const [data, setdata] = useState([]);
  const years = getYearsPast(20);
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  const [teachers, setteachers] = useState([]);
  const [selectedMonth, setselectedMonth] = useState("");
  const [selectedYear, setselectedYear] = useState("");
  const [isData, setisData] = useState(false);

  useEffect(() => {
    axios.get("/teachers").then((res) => setteachers(res.data));
  }, []);

  const handleSearch = () => {
    if (!year) {
      return errorAlert("Please select year");
    }
    if (!month) {
      return errorAlert("Please select month");
    }
    setloading(true);
    axios
      .get(`/transactions/pay/${year}/${month}`)
      .then((res) => {
        setloading(false);
        if (res.data.error) {
          return setdata([]);
        }
        var uniq = res.data.docs
          .map((name) => {
            return {
              count: 1,
              userID: name.userID,
            };
          })
          .reduce((a, b) => {
            a[b.userID] = (a[b.userID] || 0) + b.count;
            return a;
          }, {});

        //var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

        setdata(
          res.data.docs?.map((e) => {
            let result = teachers.find((i) => i.userID === e.userID);
            return {
              userID: result?.userID,
              position: result?.position,
              name: result?.name,
              surname: result?.surname,
              taxNumber: result?.taxNumber,
              salary: result?.salary,
              ssnit: result?.ssnit,
              allowance: result?.salary,
            };
          })
        );
        setloading(false);
        setshow(true);
        isData(true);
        setselectedMonth(month);
        setselectedYear(year);
        //
      })
      .catch((err) => {
        setloading(false);
        console.log(err, "Errpr");
      });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <form action="" className="content__container mb-5">
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="">Year</label>
            <div className="">
              <select
                value={year}
                name="transfer"
                onChange={(e) => setyear(e.target.value)}
                className="form-select"
              >
                <option defaultValue hidden>
                  Choose...
                </option>
                {years &&
                  years.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label htmlFor="">Month</label>
            <div className="">
              <select
                value={month}
                name="month"
                onChange={(e) => setmonth(e.target.value)}
                className="form-select"
              >
                <option defaultValue hidden>
                  Choose...
                </option>
                {monthYear &&
                  monthYear.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <button
              disabled={loading}
              className="btn blue__btn mt-4"
              onClick={handleSearch}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Generate
            </button>
          </div>
        </div>
      </form>
      {show && (
        <>
          <div className="content__container" id="section-to-print">
            <h3>
              SSNIT Contributions for month of{" "}
              {selectedMonth && monthYear[selectedMonth].name} {selectedYear}
            </h3>
            <Table data={data} tableHeader={tableHeader} />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button onClick={handlePrint} className="btn blue__btn mr-2">
              {" "}
              View / Print
            </button>
            <Export data={data} columns={tableHeader} />
            {/* <button onClick={handleExport} className="btn blue__btn ml-2">
              {" "}
              Export to Excel
            </button> */}
          </div>
        </>
      )}
      {isData && <div>No data yet</div>}
    </div>
  );
}

export default Contributions;
