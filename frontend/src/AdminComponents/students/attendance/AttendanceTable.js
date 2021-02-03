import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#051f3e",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const attendanceResponse = [<CheckIcon/>, <ClearIcon/>, <RemoveIcon/>]

export default function CustomizedTables({attendanceData}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            {Array(20).join().split(',').map((day , index)=> {
                return <StyledTableCell key={index} align="right">{index + 1}</StyledTableCell>
            })}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((row) => (
            <StyledTableRow key={row.studentID}>
             <StyledTableCell component="th" scope="row">
                {row.studentID}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lastname}</StyledTableCell>
              {Array(20).join().split(',').map((day , index)=> {
                return <StyledTableCell key={index} align="right">
                       { attendanceResponse[Math.floor(Math.random() * attendanceResponse.length)]}
                    </StyledTableCell>
            })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
