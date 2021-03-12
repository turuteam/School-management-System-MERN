import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrintIcon from "@material-ui/icons/Print";
//import { pdf } from "../../../components/tables/pdf";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function SbaTable({ rows, classID }) {
  const classes = useStyles();

  const calculateClassWork = (obj) => {
    if (obj) {
      let total = 40;
      let sum = Object.values(obj).reduce((t, { value }) => t + value, 0);
      return (sum / total) * (100 / 2) || "-";
    }
    return 0;
  };

  const getTotal = (exams, work) => {
    if (exams && work) {
      let classwork = calculateClassWork(work);
      return exams / 2 + (classwork === "-" ? 0 : classwork);
    }
    return 0;
  };

  const handlePrint = () => {
    window.print();
    // const headers = [
    //   { key: "course", label: "UserID" },
    //   { key: "students.name", label: "Name" },
    //   { key: "middleName", label: "Middle Name" },
    //   { key: "surname", label: " SurName" },
    //   { key: "gender", label: "Gender" },
    //   { key: "classID", label: "Class" },
    // ];
    // pdf({ data: rows, headers, filename: "AllStaff" });
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3>Results for Class {classID}</h3>
        <button onClick={handlePrint} className="btn blue__btn">
          Print <PrintIcon />
        </button>
      </div>
      <TableContainer className="mb-5" component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Course</TableCell>
              <TableRow>
                <TableCell style={{ width: 160 }} align="left">
                  Name of Student
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  ClassWork
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  Exam
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  Final Course
                </TableCell>
              </TableRow>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row?._id}>
                <TableCell>{row?.course}</TableCell>
                <TableCell align="left">
                  {row?.students.map((user) => (
                    <TableRow
                      align="left"
                      key={user?._id}
                      className="table-borderless"
                    >
                      <TableCell style={{ width: 160 }}>{user?.name}</TableCell>
                      <TableCell style={{ width: 160 }}>
                        {calculateClassWork(user?.classWork)}
                      </TableCell>
                      <TableCell style={{ width: 160 }}>
                        {user?.exam || "-"}
                      </TableCell>
                      <TableCell style={{ width: 160 }}>
                        {getTotal(user?.exam, user?.classWork)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SbaTable;
