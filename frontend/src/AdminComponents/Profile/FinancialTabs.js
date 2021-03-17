import React from "react";
import Card from "./FinanceCard";

function FinancialTabs() {
  return (
    <div>
      <h3>Financial Reports</h3>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <Card name="Bill Payment Report" route="/reports/billpayment" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card
            name="Non-Bill Payment Report"
            route="/reports/nonbillpayment"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card
            name="Itemized Bill Payment Summary"
            route="/reports/itemizedbillpayment"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Expenditure Report" route="/reports/expenditure" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card
            name="Supplementary Income Report"
            route="/reports/supplementaryincome"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Income Statement" route="/reports/incomestatement" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card
            name="Expected Revenue Report"
            route="/reports/expectedrevenue"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card
            name="Student Payments History "
            route="/reports/studentpaymentshistory"
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Class Ledger Report" route="/reports/classledger" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Cancel Payments" route="/reports/canceledpayments" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Teller Reports" route="/reports/teller" />
        </div>
        <div className="col-sm-6 col-md-4">
          <Card name="Non Debtors Report" route="/reports/nondebtors" />
        </div>
      </div>
    </div>
  );
}

export default FinancialTabs;
