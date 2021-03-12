import React, { useState, useEffect } from "react";
import CourseTable from "../../shared/ListTable";
import Search from "../../shared/Search";
import axios from "../../../store/axios";
import { errorAlert, successAlert } from "../../../utils";
import DivisionForm from "./DivisionForm";

const tableHeadings = [
  { id: "createdAt", name: "Created At" },
  { id: "name", name: "Name" },
  { id: "description", name: "Description" },
];

function Division() {
  const [name, setname] = useState("");
  const [searchQuery, setsearchQuery] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editID, seteditID] = useState("");
  const [addLoading, setaddLoading] = useState(false);
  const [divisions, setdivisions] = useState([]);
  const [storedata, setstoredata] = useState([]);
  const [openEdit, setopenEdit] = useState(false);

  useEffect(() => {
    setloading(true);
    axios.get("/divisions").then((res) => {
      setdivisions(res.data);
      setstoredata(res.data);
      setloading(false);
    });
  }, []);

  const inputFields = [
    {
      type: "text",
      label: "Search Name",
      value: searchQuery,
      name: "name",
      onChange: setsearchQuery,
    },
  ];

  const handleDelete = (id) => {
    const ans = window.confirm("are you sure you want to delete");
    if (ans) {
      axios.delete(`/divisions/delete/${id}`).then((res) => {
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        setdivisions(divisions.filter((e) => e._id !== id));
      });
    }
  };
  const handleEdit = (id) => {
    setopenEdit(true);
    let division = divisions.find((e) => e._id === id);
    seteditID(id);
    setname(division?.name);
    setdescription(division?.description);
  };

  const handleOpenAdd = () => {
    setOpen(true);
  };

  const handleAddDivision = () => {
    setaddLoading(true);
    axios
      .post("/divisions/create", {
        name,
        description,
      })
      .then((res) => {
        setaddLoading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        successAlert("Successfully created");
        setOpen(false);
        setname("");
        setdescription("");
        setdivisions([res.data.doc, ...divisions]);
      })
      .catch((err) => {
        console.log(err);
        errorAlert("Failed to add");
        setaddLoading(false);
      });
  };

  const handleEditDivision = () => {
    setaddLoading(true);
    axios
      .put(`/divisions/update/${editID}`, {
        name,
        description,
      })
      .then((res) => {
        setaddLoading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        successAlert("Successfully edit");
        setopenEdit(false);
        setname("");
        setdescription("");
        let index = divisions.findIndex((e) => e._id === editID);
        var data = divisions;
        data[index] = res.data.doc;
        setdivisions(data);
      })
      .catch((err) => {
        console.log(err);
        errorAlert("Failed to add");
        setaddLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let newClasses = [];
    if (searchQuery) {
      newClasses = storedata.filter(
        (i) =>
          i?.name.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          i?.description.toLowerCase().includes(searchQuery?.toLowerCase())
      );
    }
    setdivisions(newClasses);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setdivisions(storedata);
    setsearchQuery("");
  };

  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-10">
          <Search
            handleReset={handleReset}
            handleSearch={handleSearch}
            title="Divisions"
            inputFields={inputFields}
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-2">
          <button onClick={handleOpenAdd} className="btn orange__btn btn__lg">
            Add New Division
          </button>
        </div>
      </div>
      <CourseTable
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        data={divisions}
        loading={loading}
        handleSearch={handleSearch}
        tableHeader={tableHeadings}
      />
      <DivisionForm
        open={openEdit}
        setOpen={setopenEdit}
        loading={addLoading}
        description={description}
        setdescription={setdescription}
        name={name}
        isEdit={true}
        onSubmit={handleEditDivision}
        setname={setname}
      />
      <DivisionForm
        open={open}
        setOpen={setOpen}
        loading={addLoading}
        description={description}
        setdescription={setdescription}
        name={name}
        onSubmit={handleAddDivision}
        setname={setname}
      />
    </div>
  );
}

export default Division;
