import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ListTable from "../../shared/ListTable";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#051f3e",
    color: "#fff",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const tableHeader = [
  { id: "date", name: "Date" },
  { id: "amount", name: "Amount ($)" },
  { id: "paymentMethod", name: "Payment Method" },
  { id: "bank", name: "Bank" },
  { id: "chequeNumber", name: "Cheque Number" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewStudentPayment({
  open,
  setOpen,
  transactions,
  name,
  totalBill,
  totalPaid,
  balance,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar color="default" className={classes.appBar}>
        <Toolbar className="py-4">
          <Typography variant="body1" className={classes.title}>
            <strong>Name: {name}</strong> <br />
            <strong>Total Bill: {totalBill}</strong> <br />
            <strong>Total Amount Paid: {totalPaid}</strong> <br />
            <strong>Fees Due: {balance}</strong>
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <div className="mt-5">
        <ListTable
          noActions={true}
          data={transactions}
          tableHeader={tableHeader}
        />
      </div>
    </Dialog>
  );
}
