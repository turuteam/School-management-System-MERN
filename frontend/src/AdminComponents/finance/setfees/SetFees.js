import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeesTable from "./FeesTable";
import axios from "../../../store/axios";
import AddType from "./AddFessModel";
import DeleteModel from "./DeleteFeesModal";
import { errorAlert } from "../../../utils";
import EditFees from "./EditFees";
import { useDispatch, useSelector } from "react-redux";
import { selectFees, setfeesType } from "../../../store/slices/schoolSlice";

const tableHeader = [
  { id: "code", name: "Fees Type" },
  { id: "day", name: " Day" },
  { id: "freshDay", name: "Fresh Day" },
  { id: "border", name: "Border" },
  { id: "freshBorder", name: "Fresh Border" },
];

function SetFees() {
  const [fees, setfees] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [name, setname] = useState("");
  const [deleteID, setdeleteID] = useState("");
  const [openDelete, setopenDelete] = useState(false);
  const [loading, setloading] = useState(false);
  const [deleteloading, setdeleteloading] = useState(false);
  const [editFee, seteditFee] = useState({});
  const dispatch = useDispatch();
  const feesType = useSelector(selectFees);

  useEffect(() => {
    axios.get("/fees").then((res) => {
      setfees(res.data);
    });
  }, []);

  const handleAddNew = () => {
    setloading(true);
    axios.post("/fees/create", { name }).then((res) => {
      setloading(false);
      setfees([res.data.docs, ...fees]);
      dispatch(setfeesType([...feesType, { name, code: res.data.docs?.code }]));
      setOpen(false);
      setname("");
    });
  };

  const handleDelete = (id) => {
    setopenDelete(true);
    setdeleteID(id);
  };

  const handleEdit = (fee) => {
    console.log(fee, "clicked");
    seteditFee(fee);
    setopenEdit(true);
  };

  const onDelete = () => {
    setdeleteloading(true);
    axios
      .delete(`/fees/delete/${deleteID}`)
      .then((res) => {
        setdeleteloading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        setopenDelete(false);
        setfees(fees.filter((e) => e._id !== deleteID));
        dispatch(setfeesType(feesType.filter((i) => i._id !== deleteID)));
      })
      .catch((err) => {
        console.log(err);
        errorAlert("error occurred");
      });
  };

  return (
    <div>
      <h3>School Fees Structure</h3>
      <div className=" row mb-3">
        <div className="d-flex justify-content-end">
          <Link className="btn blue__btn ml-3" to="/finance/fees/set">
            {" "}
            Set Fees
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="btn blue__btn ml-3"
            to="/finance/fees/set"
          >
            Add Fees Type
          </button>
        </div>
      </div>
      <FeesTable
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        tableHeader={tableHeader}
        data={fees}
      />
      <AddType
        open={open}
        name={name}
        onSubmit={handleAddNew}
        loading={loading}
        setname={setname}
        setOpen={setOpen}
      />
      <DeleteModel
        handleDelete={onDelete}
        loading={deleteloading}
        open={openDelete}
        setOpen={setopenDelete}
      />
      <EditFees
        setfees={setfees}
        fees={fees}
        open={openEdit}
        fee={editFee}
        setOpen={setopenEdit}
      />
    </div>
  );
}

export default SetFees;
