import React, { useEffect, useState } from "react";
import Search from "./Search";
import Table from "./Table";
import axios from "../../../store/axios";
import Excel from "../../../components/tables/ExcelExport";
import { errorAlert } from "src/utils";

const tableHeader = [
  { id: "userID", name: "Student ID" },
  { id: "name", name: "Name" },
  { id: "classID", name: "Class" },
  { id: "bill", name: "Bill" },
  { id: "arrears", name: "Arrears" },
  { id: "total", name: "Total Bill" },
  { id: "amount", name: "Amount Paid" },
  { id: "percentage", name: "Percentage Paid" },
  { id: "owe", name: "Amount Owed" },
];

function DebtorsList() {
  const [data, setdata] = useState([]);
  const [year, setyear] = useState("");
  const [term, setterm] = useState("");
  const [listby, setlistby] = useState("");
  const [listValue, setlistValue] = useState("");
  const [filterValue, setfilterValue] = useState("");
  const [filterBy, setfilterBy] = useState("");
  const [amount, setamount] = useState("");
  const [pastStudents, setpastStudents] = useState("");
  const [withdrawStudent, setwithdrawStudent] = useState("");
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  const [fees, setfees] = useState([]);
  const [selectedterm, setselectedterm] = useState("");
  const [selectedyear, setselectedyear] = useState("");

  useEffect(() => {
    axios.get("/fees").then((res) => {
      setfees(res.data);
    });
  }, []);

  const handleSearch = () => {
    if (!year) {
      return errorAlert("Please select year");
    }
    if (!term) {
      return errorAlert("Please select term");
    }
    setloading(true);
    let bal = (u) => {
      let fee = fees.find((z) => z?.code === u?.fees);
      return fee
        ? Object.values(fee[u.status]).reduce(
            (t, v) => Number(t) + Number(v),
            0
          )
        : 0;
    };
    axios.get(`/students/unpaidfees`).then((res) => {
      let students = res.data.map((e) => {
        let total = bal(e);
        return {
          ...e,
          arrears: 0,
          bill: total,
          owe: total - e.amount,
          total,
          percentage: ((e.amount / total) * 100).toFixed(0),
        };
      });
      setdata(students.filter((e) => Number(e.percentage) !== 100));
      setshow(true);
      setloading(false);
      setselectedyear(year);
      setselectedterm(term);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h3> Debtors List</h3>
      <div className="content__container mb-5">
        <Search
          year={year}
          setyear={setyear}
          term={term}
          listby={listby}
          setlistby={setlistby}
          amount={amount}
          listValue={listValue}
          setlistValue={setlistValue}
          filterValue={filterValue}
          setfilterValue={setfilterValue}
          setamount={setamount}
          filterBy={filterBy}
          handleSearch={handleSearch}
          setfilterBy={setfilterBy}
          pastStudents={pastStudents}
          setpastStudents={setpastStudents}
          withdrawStudent={withdrawStudent}
          setwithdrawStudent={setwithdrawStudent}
          setterm={setterm}
          loading={loading}
        />
      </div>
      {show && (
        <>
          <div className="content__container" id="section-to-print">
            <div className="text-center">
              <h3>
                DEBTORS LIST FOR Term {selectedterm}/ {selectedyear}
              </h3>
            </div>
            <Table
              noData="No debtors yet"
              tableHeader={tableHeader}
              data={data}
            />
          </div>
          <div className="text-center my-3">
            <button onClick={handlePrint} className="btn blue__btn mr-2">
              Print
            </button>
            {/* <button className="btn blue__btn ml-3">Save</button> */}
            <Excel data={data} columns={tableHeader} btn="Save" />
          </div>
        </>
      )}
    </div>
  );
}

export default DebtorsList;
