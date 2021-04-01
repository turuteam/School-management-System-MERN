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

function SbaTable({
  rows,
  handleEdit,
  setclassWork,
  examMark,
  setexamMark,
  classworkMark,
  setclassworkMark,
}) {
  const classes = useStyles();

  const getTotal = (exams, work) => {
    return Number(exams || 0) + Number(work || 0);
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
              <TableCell align="left">
                Class Work (%)
                <input
                  className="form-control"
                  onChange={(e) => setclassworkMark(e.target.value)}
                  value={classworkMark}
                ></input>
              </TableCell>
              <TableCell align="left">
                Exam Score (%)
                <input
                  className="form-control"
                  onChange={(e) => setexamMark(e.target.value)}
                  value={examMark}
                ></input>{" "}
              </TableCell>
              <TableCell align="left">Total (100%)</TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">Action</TableCell>
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
                        value={row?.classWork || "-"}
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
                        onClick={() => handleEdit(row?.userID)}
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
