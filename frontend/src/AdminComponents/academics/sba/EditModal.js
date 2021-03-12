import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  setOpen,
  name,
  userID,
  exam,
  setexam,
  classWork,
  setclassWork,
  onSubmit,
  classID,
  loading,
  position,
  setposition,
}) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
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
      <AppBar color="transparent" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {name} - {userID}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <form action="" className="m-5">
        <h3 className="mb-5">Set Grades for Class {classID} </h3>
        <div className="row mb-5">
          <label className="form-label">Set ClassWork</label>
          <div className="col-sm-3">
            <label className="form-label">A1</label>
            <input
              value={classWork?.a1}
              ref={register({ max: 25 })}
              onChange={(e) =>
                setclassWork({ ...classWork, a1: Number(e.target.value) })
              }
              type="number"
              className="form-control"
              name="a1"
            />
            {errors.topic && (
              <span className=" form-error text-danger mb-2">
                This field is required
              </span>
            )}
          </div>
          <div className="col-sm-3">
            <label className="form-label">A2</label>
            <input
              value={classWork?.a2}
              ref={register({ max: 25 })}
              onChange={(e) =>
                setclassWork({ ...classWork, a2: Number(e.target.value) })
              }
              type="number"
              className="form-control"
              name="a2"
            />
            {errors.topic && (
              <span className=" form-error text-danger mb-2">
                This field is required
              </span>
            )}
          </div>
          <div className="col-sm-3">
            <label className="form-label">A3</label>
            <input
              value={classWork?.a3}
              ref={register({ max: 25 })}
              onChange={(e) =>
                setclassWork({ ...classWork, a3: Number(e.target.value) })
              }
              type="number"
              className="form-control"
              name="a3"
            />
            {errors.topic && (
              <span className=" form-error text-danger mb-2">
                This field is required
              </span>
            )}
          </div>
          <div className="col-sm-3">
            <label className="form-label">A4</label>
            <input
              value={classWork?.a4}
              ref={register({ max: 25 })}
              onChange={(e) =>
                setclassWork({ ...classWork, a4: Number(e.target.value) })
              }
              type="number"
              className="form-control"
              name="a4"
            />
            {errors.topic && (
              <span className=" form-error text-danger mb-2">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label className="form-label">Exam Mark</label>
          <input
            value={exam}
            ref={register({ max: 100 })}
            onChange={(e) => setexam(Number(e.target.value))}
            type="number"
            className="form-control col-6"
            name="exams"
          />
          {errors.topic && (
            <span className=" form-error text-danger mb-2">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-5">
          <label className="form-label">Position</label>
          <input
            value={position}
            ref={register({ max: 100 })}
            onChange={(e) => setposition(Number(e.target.value))}
            type="number"
            className="form-control col-6"
            name="position"
          />
          {errors.topic && (
            <span className=" form-error text-danger mb-2">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <button
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
            className="btn blue__btn"
          >
            {loading && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Submit Changes
          </button>
        </div>
      </form>
    </Dialog>
  );
}
