import React, { useState } from "react";
import Table from "./Table";
import axios from "../../../store/axios";
import Loading from "../../../Loading";
import { monthYear } from "../../../data";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/userSlice";
import { errorAlert, getYearsPast } from "../../../utils";

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
  const user = useSelector(selectUser);

  const handleSearch = () => {
    setloading(true);
    axios.get("/transactions/staff/pay").then((res) => {
      setdata(
        res.data?.map(
          async (e) =>
            await axios.get(`/teachers/${e.userID}`).then((result) => {
              return {
                userID: result?.resultserID,
                position: result?.position,
                name: result?.name,
                surname: result?.surname,
                taxNumber: result?.taxNumber,
                salary: result?.salary,
                ssnit: result?.ssnit,
                allowance: result?.salary,
              };
            })
        )
      );
      setloading(false);
      setshow(true);
      // setdata(res.data);
    });
  };

  console.log(data);

  return (
    <div>
      {loading && <Loading />}
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
              className="btn blue__btn"
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
        <div className="content__container">
          {" "}
          <h3>
            <strong>{user?.name}</strong>
          </h3>
          <h5>5% January Petra Trust Contribution List</h5>
          <Table data={data} tableHeader={tableHeader} />
          <div className="d-flex justify-content-end mt-5">
            <button className="btn blue__btn"> View / Print</button>
            <button className="btn blue__btn ml-2"> Export to Excel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contributions;
