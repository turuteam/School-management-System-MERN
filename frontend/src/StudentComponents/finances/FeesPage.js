import React, { useState, useEffect } from "react";
import TableList from "../../AdminComponents/shared/ListTable";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import FeesTable from "./Fees";

const tableHeader = [
  { id: "date", name: "Date" },
  { id: "paymentMethod", name: "Payment Method" },
  { id: "bank", name: "Bank" },
  { id: "description", name: "Description" },
  { id: "amount", name: "Amount" },
];
function FeesPage() {
  const [loading, setloading] = useState(false);
  const [payments, setpayments] = useState([]);
  const [fees, setfees] = useState({});
  const user = useSelector(selectUser);
  const [totalBill, settotalBill] = useState(0);
  const [totalPaid, settotalPaid] = useState(0);
  const [balance, setbalance] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let transactions = await axios.get(`/transactions/student/${user?.id}`);
      setpayments(transactions.data);

      let student = await axios.get(`/students/student/${user?.id}`);

      const feesData = await axios.get(
        `/fees/type/${student.data.student?.fees}/${student.data.student?.status}`
      );
      setfees(feesData.data);
      const bill = Object.values(feesData.data).reduce(
        (t, value) => Number(t) + Number(value),
        0
      );

      const paid = transactions.data?.reduce((accumulator, element) => {
        return Number(accumulator) + Number(element?.amount);
      }, 0);
      settotalBill(bill);
      settotalPaid(paid);
      setbalance(bill - paid);
    };
    getData();
  }, [user]);

  return (
    <div>
      <FeesTable
        fees={fees}
        totalBill={totalBill}
        totalPaid={totalPaid}
        balance={balance}
      />

      <h3 className="mb-3 mt-5">Fees Transactions</h3>
      <TableList
        data={payments}
        noActions={true}
        tableHeader={tableHeader}
        loading={loading}
      />
    </div>
  );
}

export default FeesPage;
