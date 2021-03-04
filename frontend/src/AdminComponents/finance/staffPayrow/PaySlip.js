import React, { useState, useEffect } from "react";
import axios from "../../../store/axios";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { errorAlert, successAlert } from "../../../utils";
import { monthYear } from "../../../data";

const today = new Date();

function PaySlip() {
  const [state, setstate] = useState({});
  const [payrow, setpayrow] = useState({});
  const [user, setuser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get("/school").then((res) => {
      console.log(res.data);
      setstate(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/teachers/${id}`).then(async (res) => {
      setuser(res.data.teacher);
      let payData = await axios.get(`/payrow/${res.data.teacher?.position}`);
      let pay = payData?.data.docs;
      console.log(pay);
      const bill =
        Number(pay?.allowance) + Number(pay?.salary) + Number(pay?.bonus);
      setpayrow({ ...pay, total: bill });
    });
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = () => {
    axios.delete(`/transactions/delete/${id}`).then((res) => {
      if (res.data.error) {
        errorAlert(res.data.error);
        return 0;
      }
      history.goBack();
      // history.push("/finance/transactions");
    });
  };

  return (
    <>
      <div className="border content__container mb-4">
        <div className="text-center border-bottom p-3">
          <h2>{state?.fullName}</h2>
          <p>{state?.motto}</p>
          <h6>
            <strong>
              PaySlip for {monthYear[today.getMonth()].name}{" "}
              {today.getFullYear()}
            </strong>
          </h6>
        </div>
        <div className="row p-3">
          <div className="col-6">
            <div className="d-flex">
              <h6 className="col-4">
                {" "}
                <strong>Name</strong>
              </h6>
              <h6>
                <strong>
                  {user?.name} {user?.middleName} {user?.surname}{" "}
                </strong>
              </h6>
            </div>
            <div className="d-flex ">
              <h6 className="col-4">
                {" "}
                <strong>Position</strong>
              </h6>
              <h6>
                <strong>{user?.position}</strong>
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex ">
              <h6 className="col-4">
                {" "}
                <strong>Account Number</strong>
              </h6>
              <h6>
                <strong>{user?.accNumber || "-"} </strong>
              </h6>
            </div>
            <div className="d-flex ">
              <h6 className="col-4">
                {" "}
                <strong>Bank</strong>
              </h6>
              <h6>
                <strong>{user?.bank || "-"} </strong>
              </h6>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan="2" scope="col">
                Income
              </th>
              <th colSpan="2" scope="col">
                Deductions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Salary</td>
              <td>{payrow?.salary}</td>
              <td>Income Tax</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Allowance</td>
              <td>{payrow?.allowance}</td>
              <td>Employee SSF</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Bonus</td>
              <td>{payrow.bonus}</td>
              <td>Other Deductions</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Gross Income</td>
              <td>{payrow?.total}</td>
              <td>Total Deductions</td>
              <td>330</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Net Salary</td>
              <td>{payrow?.total - 330}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div>
            <h6>
              Date :{" "}
              <strong>{moment(today).format("dddd Do MMMM YYYY")}</strong>
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <h6>Signature of Employer: ..........................</h6>
            </div>
            <div>
              <h6>Signature of Employee: ..........................</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-3">
        <button onClick={handlePrint} className="btn blue__btn">
          Print
        </button>
      </div>
    </>
  );
}

export default PaySlip;
