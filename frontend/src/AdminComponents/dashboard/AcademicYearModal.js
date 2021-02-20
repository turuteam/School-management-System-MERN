import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const min = new Date().getFullYear();
const max = min + 10;

const yearArray = () => {
    let arr = [];
    for (let index = min; index < max; index++) {
         arr.push(index) ;
    }
    return arr
}

export default function CustomizedDialogs({open , handleSubmit, setOpen, to, from , setto, setfrom, term, setterm}) {
 
  const handleClose = () => {
    setOpen(false);
  };

  const yearOptions = yearArray();

  return (
   
      <Dialog maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Set New Current Year
        </DialogTitle>
        <form action="">
                <DialogContent dividers>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="">From</label>
                                <select 
                                value={from}
                                onChange={e => setfrom(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                    <option defaultValue hidden>Select</option>
                                    {yearOptions && yearOptions.map(e => <option value={e} key={e} >{e}</option>)}
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label htmlFor="">To</label>
                                <select 
                                value={to}
                                onChange={e => setto(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                    <option defaultValue hidden>Select</option>
                                    {yearOptions && yearOptions.map(e => <option value={e} key={e} >{e}</option>)}
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label htmlFor="">Term</label>
                                <select 
                                value={term}
                                onChange={e => setterm(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                    <option defaultValue hidden>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleSubmit} color="primary">
                    Save 
                </Button>
                </DialogActions>
        </form>
      </Dialog>
  );
}
