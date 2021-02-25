import React, { useState } from "react";
import SearchStudent from "./SearchStudent";
import PaymentForm from "./PaymentForm";
import ViewStudent from "./ViewStudent";
import axios from "../../../store/axios";
import { errorAlert, successAlert } from "../../../utils";

function BillPayment() {
  const [year, setyear] = useState("");
  const [term, setterm] = useState("");
  const [classID, setclassID] = useState("");
  const [studentID, setstudentID] = useState("");
  const [studentOptions, setstudentOptions] = useState([]);
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const [bank, setbank] = useState("");
  const [chequeNo, setchequeNo] = useState("");
  const [paymentType, setpaymentType] = useState("");
  const [applyTo, setapplyTo] = useState({
    all: false,
    tuition: false,
    examination: false,
    facility: false,
    maintenance: false,
  });
  const [remarks, setremarks] = useState("");
  const [loading, setloading] = useState(false);
  const [transactions, settransactions] = useState([]);
  const [loadingStudents, setloadingStudents] = useState(false);
  const [user, setuser] = useState({});
  const [feetype, setfeetype] = useState({});
  const [balance, setbalance] = useState(0);
  const [totalBill, settotalBill] = useState(0);
  const [totalPaid, settotalPaid] = useState(0);

  const handleSelectStudent = async (id) => {
    setstudentID(id);

    let transactionData = await axios.get(`/transactions/student/${id}`);
    settransactions(transactionData.data);

    let studentData = await axios.get(`/students/student/${id}`);
    let student = studentData.data?.student;
    console.log(student);
    setuser(student);

    let feesData = await axios.get(
      `/fees/type/${student?.fees}/${student?.status}`
    );
    console.log(feesData);
    setfeetype(feesData?.data);

    const bill = Object.values(feesData?.data).reduce(
      (t, value) => Number(t) + Number(value),
      0
    );

    const paid = transactionData.data?.reduce((accumulator, element) => {
      return Number(accumulator) + Number(element?.amount);
    }, 0);
    settotalBill(bill);
    settotalPaid(paid);
    setbalance(bill - paid);
    setloading(false);
  };

  const handleSelectClass = (id) => {
    setloadingStudents(true);
    setstudentOptions([]);
    setstudentID("");
    setclassID(id);
    axios
      .get(`/students/class/${id}`)
      .then((res) => {
        setloadingStudents(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        setstudentOptions(res.data.users);
      })
      .catch((err) => {
        console.log(err);
        setloadingStudents(false);
      });
  };

  const handlePayement = () => {
    setloading(true);
    axios
      .post("/transactions/create", {
        date,
        amount,
        paymentMethod: paymentType,
        type: "income",
        description: remarks,
        bank,
        chequeNumber: chequeNo,
        category: "fees",
        fees: {
          userID: studentID,
          term,
          academicYear: year,
          applyTo,
        },
      })
      .then((res) => {
        setloading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
        }
        let newTransactions = [res.data.doc, ...transactions];
        settransactions(newTransactions);
        const paid = newTransactions?.reduce((accumulator, element) => {
          return Number(accumulator) + Number(element?.amount);
        }, 0);
        settotalPaid(paid);
        setbalance(totalBill - paid);
        successAlert("Payment successfully made");
        setdate("");
        setamount("");
        setremarks("");
        setchequeNo("");
        setbank("");
        setpaymentType("");
      })
      .catch(() => {
        setloading(false);
        errorAlert("Transaction Failed");
      });
  };

  return (
    <div>
      <h3>Student Bill Payment</h3>
      <div className="row">
        <div className="col-sm-6">
          <SearchStudent
            year={year}
            term={term}
            loading={loadingStudents}
            setterm={setterm}
            setyear={setyear}
            studentID={studentID}
            setstudentID={handleSelectStudent}
            setclassID={handleSelectClass}
            classID={classID}
            studentOptions={studentOptions}
          />

          {studentID && (
            <>
              {" "}
              {balance > 0 ? (
                <PaymentForm
                  balance={balance}
                  amount={amount}
                  chequeNo={chequeNo}
                  setchequeNo={setchequeNo}
                  bank={bank}
                  setbank={setbank}
                  setamount={setamount}
                  date={date}
                  applyTo={applyTo}
                  setapplyTo={setapplyTo}
                  setdate={setdate}
                  paymentType={paymentType}
                  setpaymentType={setpaymentType}
                  remarks={remarks}
                  setremarks={setremarks}
                  handlePayement={handlePayement}
                  loading={loading}
                />
              ) : (
                <div className="content__container text-center">
                  <h5 className="text-info">Fees is fully paid</h5>
                </div>
              )}
            </>
          )}
        </div>
        <div className="col-sm-6">
          {studentID && (
            <ViewStudent
              transactions={transactions}
              user={user}
              balance={balance}
              feetype={feetype}
              totalBill={totalBill}
              total={totalPaid}
              id={studentID}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
