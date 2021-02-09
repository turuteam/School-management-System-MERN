import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TablePaginationActions from './TablePagination'


const useStyles2 = makeStyles({
  table: {
    width: '100%',
  },
});

export default function CustomPaginationActionsTable({data, tableHeader, loading}) {
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

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
              {tableHeader && tableHeader.map(head => <TableCell key={head.id} >{head.name}</TableCell>)}
          </TableRow>
        </TableHead>
        {loading ? <div className="text-center my-5 w-100">
              <div class="spinner-grow spinner-grow-sm" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
             <div class="spinner-grow spinner-grow-sm" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
             <div class="spinner-grow spinner-grow-sm" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
        </div> : 
        <TableBody>
          {data.length <=0  ? <div className="text-center my-5">  No data yet </div> : 
          <>
            {(rowsPerPage > 0
              ?  data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row._id}>
                  {tableHeader && 
                    tableHeader.map(cell =>   
                          <TableCell key={cell.id}  align="left">
                              {row[cell.id] || "null"}
                          </TableCell>
                  )}
                {/* <TableCell  align="left">
                  <div  className="d-flex align-items-center">
                    <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={() =>  handleEdit(row._id)}>
                      <EditIcon></EditIcon>
                    </IconButton>
                  </div>
                </TableCell> */}
              </TableRow>
            ))}
          </>
          }

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        }
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
