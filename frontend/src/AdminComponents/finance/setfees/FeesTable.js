import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TablePaginationActions from '../../shared/TablePagination'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
},
});

export default function CustomPaginationActionsTable({tableHeader, data, handleDelete}) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTotal = (a,b,c,d)=>{
    let total =  parseFloat(a || 0) + parseFloat(b || 0) + parseFloat(c || 0) + parseFloat(d || 0);
    return total;
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
           <TableHead>
              <TableRow>
                  {tableHeader && tableHeader.map(head => <TableCell  align="left" key={head.id} >{head.name}</TableCell>)}
                  <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
        <TableBody>
          {data.length > 0  ? 
          <>{(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 250 }} align="left">
                {row?.name}
              </TableCell>
              <TableCell  align="left" style={{ width: 250 }}>
                 <ul  className="fees">
                    {row?.day?.tution ? <li> Tution Fee = {row?.day?.tution} </li> : "-"} 
                    {row?.day?.facility ? <li> Facility Fee = {row?.day?.facility} </li> : "-"}
                    {row?.day?.maintenance ? <li> Tution maintenance fee = {row?.day?.maintenance} </li> : "-"}
                    {row?.day?.exam ? <li> Exam Fee = {row?.day?.exam} </li> : "-"}
                 </ul>
                 <div>Total {getTotal( row?.day?.tution , row?.day?.facility , row?.day?.maintenance , row?.day?.exam) || 0}  </div>
              </TableCell>
              <TableCell  align="left" style={{ width: 250 }}>
                 <ul  className="fees">
                    {row?.freshDay?.tution ? <li> Tution Fee = {row?.freshDay?.tution} </li> : "-"} 
                    {row?.freshDay?.facility ? <li> Facility Fee = {row?.freshDay?.facility} </li> : "-"}
                    {row?.freshDay?.maintenance ? <li> Tution maintenance fee = {row?.freshDay?.maintenance} </li> : "-"}
                    {row?.freshDay?.exam ? <li> Exam Fee = {row?.freshDay?.exam} </li> : "-"}
                 </ul>
                 <div>Total {row?.freshDay?.tution + row?.freshDay?.facility + row?.freshDay?.maintenance + row?.freshDay?.exam || 0}  </div>
              </TableCell>
              <TableCell  align="left" style={{ width: 250 }}>
                 <ul  className="fees">
                    {row?.border?.tution ? <li> Tution Fee = {row?.border?.tution} </li> : "-"} 
                    {row?.border?.facility ? <li> Facility Fee = {row?.border?.facility} </li> : "-"}
                    {row?.border?.maintenance ? <li> Tution maintenance fee = {row?.border?.maintenance} </li> : "-"}
                    {row?.border?.exam ? <li> Exam Fee = {row?.border?.exam} </li> : "-"}
                 </ul>
                 <div>Total {getTotal(row?.border?.tution , row?.border?.facility , row?.border?.maintenance , row?.border?.exam) || 0}  </div>
              </TableCell>
              <TableCell  align="left" style={{ width: 250 }}>
                 <ul  className="fees">
                    {row?.freshBorder?.tution ? <li> Tution Fee = {row?.freshBorder?.tution} </li> : "-"} 
                    {row?.freshBorder?.facility ? <li> Facility Fee = {row?.freshBorder?.facility} </li> : "-"}
                    {row?.freshBorder?.maintenance ? <li> Tution maintenance fee = {row?.freshBorder?.maintenance} </li> : "-"}
                    {row?.freshBorder?.exam ? <li> Exam Fee = {row?.freshBorder?.exam} </li> : "-"}
                 </ul>
                 <div>Total {row?.freshBorder?.tution + row?.freshBorder?.facility + row?.freshBorder?.maintenance + row?.freshBorder?.exam || 0}  </div>
              </TableCell>
              <TableCell  align="left">
                <div  className="d-flex align-items-center">
                <IconButton onClick={() => handleDelete(row._id)}>
                      <DeleteOutlineIcon/>
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))} </>
          : <>No  data</>
          }
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
