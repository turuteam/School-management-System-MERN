import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function SbaTable({ rows, handleEdit, setclassWork }) {
  const classes = useStyles();

  const calculateClassWork = (obj) => {
    if (obj) {
      let total = 40;
      let sum = Object.values(obj).reduce((t, { value }) => t + value, 0);
      return (sum / total) * (100 / 2) || 0;
    }
    return 0;
  };

  const getTotal = (exams, work) => {
    if (exams && work) {
      let classwork = calculateClassWork(work);
      return exams / 2 + classwork;
    }
    return 0;
  };

  return (
    <div>
      <h3>Continuous Assessment</h3>
      <TableContainer className="mb-5" component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left" colSpan={3}>
                Name of Student
              </TableCell>
              <TableCell align="left" colSpan={4}>
                Class Work
              </TableCell>
              <TableCell align="left">Class Work Scaled to 50%</TableCell>
              <TableCell align="left">Exam score 100%</TableCell>
              <TableCell align="left">Exam Score scaled to 50%</TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
              <TableCell align="center">
                <div className="border-bottom">A1</div>
                <div className="">25</div>
              </TableCell>
              <TableCell align="center">
                <div className="border-bottom">A2</div>
                <div className="">25</div>
              </TableCell>
              <TableCell align="center">
                <div className="border-bottom">A3</div>
                <div className="">25</div>
              </TableCell>
              <TableCell align="center">
                <div className="border-bottom">A4</div>
                <div className="">25</div>
              </TableCell>
              <TableCell colSpan={6}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 ? (
              <>
                {rows?.map((row) => (
                  <TableRow key={row?.userID}>
                    <TableCell>{row?.userID}</TableCell>
                    <TableCell colSpan={3} align="left">
                      {row?.name}
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.classWork?.a1 || "-"}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row.classWork?.a2 || "-"}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.classWork?.a3 || "-"}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.classWork?.a4 || "-"}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={calculateClassWork(row?.classWork)}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.exam}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.exam / 2 || 0}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={getTotal(row?.exam, row?.classWork)}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <input
                        readOnly
                        value={row?.position}
                        type="text"
                        className="form-control"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <button
                        onClick={() => handleEdit(row?._id)}
                        className="btn"
                      >
                        <EditIcon />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableCell colSpan={10}>
                <strong>There are no students in this class</strong>{" "}
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SbaTable;
