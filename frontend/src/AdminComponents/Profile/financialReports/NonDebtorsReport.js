import React, { useEffect, useState } from "react";
import axios from "../../../store/axios";
import ListTable from "../../../AdminComponents/shared/ListTable";
import { useSelector } from "react-redux";
import { selectYearGroup } from "../../../store/slices/schoolSlice";
import moment from "moment";

let thismonth = moment().month();
let thisyear = moment().year();
let dayOne = moment(`01/${thismonth}/${thisyear}`).format("YYYY-MM-DD");

const tableHeader = [
  { id: "userID", name: "Student ID" },
  { id: "name", name: "Name" },
  { id: "class", name: "Class" },
  { id: "bill", name: "Bill" },
  { id: "arrears", name: "Arrears" },
  { id: "total", name: "Total" },
  { id: "amountPaid", name: "Amount Paid" },
  { id: "amountOwed", name: "Amount Owed" },
];

function NonBillPayment() {
  const [data, setdata] = useState([]);
  const [year, setyear] = useState("");
  const [term, setterm] = useState("");
  const [from, setfrom] = useState(dayOne);
  const [to, setto] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setloading] = useState(false);
  const years = useSelector(selectYearGroup);

  useEffect(() => {
    setloading(true);
    axios.get(`/nonbillpayment`).then((res) => {
      setdata([]);
      setloading(false);
    });
  }, []);

  console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Non Debtors Report</h3>
      <form className="content__container row">
        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            Year
          </label>
          <div className="">
            <select
              name="academic-calendar"
              className="form-select"
              value={year}
              onChange={(e) => setyear(e.target.value)}
            >
              <option defaultValue hidden>
                Choose...
              </option>
              {years &&
                years.map((y) => (
                  <option value={y?.year} key={y._id}>
                    {y?.year}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            Term
          </label>
          <div className="">
            <select
              name="academic-calendar"
              className="form-select"
              value={term}
              onChange={(e) => setterm(e.target.value)}
            >
              <option defaultValue hidden>
                Choose...
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            From
          </label>
          <div className="å">
            <input
              value={from}
              onChange={(e) => setfrom(e.target.value)}
              type="date"
              className="form-control"
              name="from"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <label htmlFor="name" className=" col-form-label">
            To
          </label>
          <div className="">
            <input
              value={to}
              onChange={(e) => setto(e.target.value)}
              type="date"
              className="form-control"
              name="to"
            />
          </div>
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

      <div className="content__container mt-5">
        <div className="text-center">
          <h5>
            NON DEBTORS LIST FOR term {term || "-"} / year {year || "-"}
          </h5>
          <div>Including past students</div>
        </div>
        <ListTable data={data} noActions={true} tableHeader={tableHeader} />
        {data.length > 0 && (
          <div className="d-flex justify-content-center mt-3">
            <button className="btn blue__btn">Print</button>
            <button className="btn blue__btn">Save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NonBillPayment;
