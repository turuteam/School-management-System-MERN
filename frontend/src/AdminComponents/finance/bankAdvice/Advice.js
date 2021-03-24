import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Letter from "./Letter";
import { selectFees, selectYearGroup } from "../../../store/slices/schoolSlice";
import Search from "./Search";
import axios from "../../../store/axios";
import { errorAlert, getYearsPast } from "../../../utils";
import ViewAdvice from "./ViewAdvice";

function Advice() {
  const [salutations, setsalutations] = useState("The Manager");
  const [subject, setsubject] = useState("Staff Bank Advice Report");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");
  const [bank, setbank] = useState("");
  const years = getYearsPast(10);
  const [body, setbody] = useState(
    "We attached herewith cheque No {cheque_number_here} {bank_name_here}, and amount of GH¢ 0.00 ( ) being salaries for March, 2021 in respect of the names below."
  );
  const [author, setauthor] = useState("The Accountant");
  //const years = useSelector(selectYearGroup);
  const [staff, setstaff] = useState([]);
  const [loading, setloading] = useState(false);
  const [showLetter, setshowLetter] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedyear, setselectedyear] = useState("");
  const [selectedmonth, setselectedmonth] = useState("");
  const [selectedbank, setselectedbank] = useState("");

  const getStaff = (e) => {
    setbank(e.target.value);
  };

  const onSearch = () => {
    if (!year) {
      return errorAlert("Year is required");
    }
    if (!month) {
      return errorAlert("Month is required");
    }
    if (!bank) {
      return errorAlert("Bank is required");
    }
    setloading(true);
    axios.get(`/teachers/bank/${bank}`).then((res) => {
      console.log(res);
      setloading(false);
      setshowLetter(true);
      setstaff(res.data.docs);
      setselectedmonth(month);
      setselectedyear(year);
      setselectedbank(bank);
    });
  };

  return (
    <div>
      <h3 className="mb-2">Bank Advice</h3>
      <div className="content__container mb-3">
        <Search
          year={year}
          setyear={setyear}
          bank={bank}
          setbank={getStaff}
          month={month}
          setmonth={setmonth}
          years={years}
          loading={loading}
          onSearch={onSearch}
        />
      </div>
      {showLetter && (
        <>
          <Letter
            salutations={salutations}
            setsalutations={setsalutations}
            setsubject={setsubject}
            subject={subject}
            body={body}
            staff={staff}
            month={selectedmonth}
            bank={selectedbank}
            year={selectedyear}
            setbody={setbody}
            author={author}
            setauthor={setauthor}
          />

          {staff.length > 0 && (
            <div>
              <button onClick={() => setOpen(true)} className="btn blue__btn">
                View / Print Report
              </button>
            </div>
          )}
        </>
      )}
      <ViewAdvice
        salutations={salutations}
        month={selectedmonth}
        year={selectedyear}
        staff={staff}
        subject={subject}
        open={open}
        body={body}
        author={author}
        setOpen={setOpen}
      />
    </div>
  );
}

export default Advice;
