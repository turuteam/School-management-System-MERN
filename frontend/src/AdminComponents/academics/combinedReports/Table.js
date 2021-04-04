import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrintIcon from "@material-ui/icons/Print";
import axios from "../../../store/axios";
//import { pdf } from "../../../components/tables/pdf";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function SbaTable({ rows, classID }) {
  const classes = useStyles();
  const [school, setschool] = useState([]);

  useEffect(() => {
    axios.get("/school").then((res) => {
      setschool(res.data);
    });
  }, []);

  const getTotal = (exams, work) => {
    return Number(exams || 0) + Number(work || 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="content__container">
      <button onClick={handlePrint} className="btn blue__btn float-right">
        Print <PrintIcon />
      </button>
      <div className=" mb-3" id="section-to-print">
        <div className="text-center">
          <h3>{school?.fullName}</h3>
          <p>
            <strong>{school?.motto}</strong>
          </p>
        </div>
        <h3>Results for Class {classID}</h3>
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
                        <TableCell style={{ width: 160 }}>
                          {user?.name}
                        </TableCell>
                        <TableCell style={{ width: 160 }}>
                          {user?.classWork}
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
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-danger">
                    No data yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SbaTable;
