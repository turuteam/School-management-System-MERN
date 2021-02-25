import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import TablePaginationActions from "../../shared/TablePagination";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable({
  tableHeader,
  data,
  handleDelete,
  handleEdit,
}) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTotal = (a, b, c, d) => {
    let total =
      Number(a || 0) + Number(b || 0) + Number(c || 0) + Number(d || 0);
    return total;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {tableHeader &&
              tableHeader.map((head) => (
                <TableCell align="left" key={head.id}>
                  {head.name}
                </TableCell>
              ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            <>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row) => (
                <TableRow key={row?.id}>
                  <TableCell style={{ width: 250 }} align="left">
                    {row?.name}
                  </TableCell>
                  <TableCell align="left" style={{ width: 250 }}>
                    <div className="d-flex flex-column justify-content-around">
                      <ul className="fees">
                        {row?.day?.tution ? (
                          <li> Tution Fee = {row?.day?.tution} </li>
                        ) : (
                          "-"
                        )}
                        {row?.day?.facility ? (
                          <li> Facility Fee = {row?.day?.facility} </li>
                        ) : (
                          "-"
                        )}
                        {row?.day?.maintenance ? (
                          <li>Maintenance fee = {row?.day?.maintenance} </li>
                        ) : (
                          "-"
                        )}
                        {row?.day?.exam ? (
                          <li> Exam Fee = {row?.day?.exam} </li>
                        ) : (
                          "-"
                        )}
                      </ul>
                      <div className="d-flex flex-column justify-content-around">
                        <strong className="text-info">
                          Total{" "}
                          {getTotal(
                            row?.day?.tution,
                            row?.day?.facility,
                            row?.day?.maintenance,
                            row?.day?.exam
                          ) || 0}
                        </strong>
                        <IconButton
                          onClick={() =>
                            handleEdit({
                              ...row.day,
                              classID: row.name,
                              type: "day",
                            })
                          }
                        >
                          <EditIcon />
                        </IconButton>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left" style={{ width: 250 }}>
                    <ul className="fees">
                      {row?.freshDay?.tution ? (
                        <li> Tution Fee = {row?.freshDay?.tution} </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshDay?.facility ? (
                        <li> Facility Fee = {row?.freshDay?.facility} </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshDay?.maintenance ? (
                        <li className="d-flex">
                          Maintenance fee = {row?.freshDay?.maintenance}{" "}
                        </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshDay?.exam ? (
                        <li> Exam Fee = {row?.freshDay?.exam} </li>
                      ) : (
                        "-"
                      )}
                    </ul>
                    <div className="d-flex flex-column justify-content-around">
                      <strong className="text-info">
                        Total{" "}
                        {getTotal(
                          row?.freshDay?.tution,
                          row?.freshDay?.facility,
                          row?.freshDay?.maintenance,
                          row?.freshDay?.exam
                        )}
                      </strong>
                      <IconButton
                        onClick={() =>
                          handleEdit({
                            ...row.freshDay,
                            classID: row.name,
                            type: "freshDay",
                          })
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="left" style={{ width: 250 }}>
                    <div className="d-flex flex-column justify-content-around">
                      <ul className="fees">
                        {row?.border?.tution ? (
                          <li> Tution Fee = {row?.border?.tution} </li>
                        ) : (
                          "-"
                        )}
                        {row?.border?.facility ? (
                          <li> Facility Fee = {row?.border?.facility} </li>
                        ) : (
                          "-"
                        )}
                        {row?.border?.maintenance ? (
                          <li className="d-flex">
                            Maintenance fee = {row?.border?.maintenance}{" "}
                          </li>
                        ) : (
                          "-"
                        )}
                        {row?.border?.exam ? (
                          <li> Exam Fee = {row?.border?.exam} </li>
                        ) : (
                          "-"
                        )}
                      </ul>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-info">
                          Total:{" "}
                          {getTotal(
                            row?.border?.tution,
                            row?.border?.facility,
                            row?.border?.maintenance,
                            row?.border?.exam
                          ) || 0}
                        </strong>
                        <IconButton
                          onClick={() =>
                            handleEdit({
                              ...row.border,
                              classID: row.name,
                              type: "border",
                            })
                          }
                        >
                          <EditIcon />
                        </IconButton>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left" style={{ width: 250 }}>
                    <ul className="fees">
                      {row?.freshBorder?.tution ? (
                        <li> Tution Fee = {row?.freshBorder?.tution} </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshBorder?.facility ? (
                        <li> Facility Fee = {row?.freshBorder?.facility} </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshBorder?.maintenance ? (
                        <li>
                          Maintenance fee = {row?.freshBorder?.maintenance}{" "}
                        </li>
                      ) : (
                        "-"
                      )}
                      {row?.freshBorder?.exam ? (
                        <li> Exam Fee = {row?.freshBorder?.exam} </li>
                      ) : (
                        "-"
                      )}
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong className="text-info">
                        Total{" "}
                        {getTotal(
                          row?.freshBorder?.tution,
                          row?.freshBorder?.facility,
                          row?.freshBorder?.maintenance,
                          row?.freshBorder?.exam
                        )}
                      </strong>
                      <IconButton
                        onClick={() =>
                          handleEdit({
                            ...row.freshBorder,
                            classID: row.name,
                            type: "freshBorder",
                          })
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="d-flex  align-items-center">
                      <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}{" "}
            </>
          ) : (
            <>No data</>
          )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            {data.length > 5 && (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            )}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
