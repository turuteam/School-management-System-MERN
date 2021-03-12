import React, { useState, useEffect } from "react";
import AddCampus from "./AddCampus";
import ListCampus from "../../shared/ListTable";
import EditCampus from "./EditCampuses";
import axios from "../../../store/axios";
import { errorAlert, successAlert } from "../../../utils";

const tableHeader = [
  { id: "name", name: "Name" },
  { id: "location", name: "Location" },
  { id: "createdAt", name: "Added" },
];

function Campuses() {
  const [openEdit, setopenEdit] = useState(false);
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [editname, seteditname] = useState("");
  const [editlocation, seteditlocation] = useState("");
  const [id, setid] = useState("");
  const [loading, setloading] = useState(false);
  const [createLoading, setcreateLoading] = useState(false);
  const [campuses, setcampuses] = useState([]);

  const handleDelete = (delID) => {
    setloading(true);
    axios
      .delete(`/campuses/delete/${delID}`)
      .then((res) => {
        setloading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        setcampuses(campuses.filter((i) => i._id !== delID));
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
        errorAlert("something when wrong");
      });
  };

  const handleEdit = (editID) => {
    setopenEdit(true);
    let editCampus = campuses.find((e) => e._id === editID);
    seteditlocation(editCampus?.location);
    seteditname(editCampus?.name);
    setid(editCampus?._id);
  };
  const onEdit = () => {
    setloading(true);
    axios
      .put(`/campuses/update/${id}`, {
        name: editname,
        location: editlocation,
      })
      .then((res) => {
        console.log(res.data);
        setloading(false);
        if (res.data.error) {
          errorAlert(res.data.error);
          return 0;
        }
        successAlert("Campus successfully edit");
        let oldArray = campuses.filter((e) => e._id !== id);
        setcampuses([res.data.doc, ...oldArray]);
        setopenEdit(false);
        console.log(openEdit);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
        errorAlert("something when wrong");
      });
  };

  useEffect(() => {
    axios.get("/campuses").then((res) => {
      console.log(res.data, "data");
      setcampuses(res.data);
    });
  }, []);

  const handleAddCampus = () => {
    setcreateLoading(true);
    axios
      .post("/campuses/create", { name, location })
      .then((res) => {
        console.log("submited");
        console.log(res);
        setcreateLoading(false);
        if (res.data.error) {
          errorAlert("something when wrong");
          return 0;
        }
        successAlert("successfully created");
        setcampuses([res.data.doc, ...campuses]);
        setname("");
        setlocation("");
      })
      .catch((err) => {
        setcreateLoading(false);
        console.log(err);
        errorAlert("something when wrong");
      });
  };

  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        <div className="col-sm-12 mb-5">
          <AddCampus
            loading={createLoading}
            name={name}
            location={location}
            setname={setname}
            setlocation={setlocation}
            onSubmit={handleAddCampus}
          />
        </div>
        <div className="col-sm-12">
          <ListCampus
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            data={campuses}
            tableHeader={tableHeader}
          />
        </div>
      </div>
      <EditCampus
        open={openEdit}
        loading={loading}
        setopen={setopenEdit}
        name={editname}
        location={editlocation}
        setname={seteditname}
        setlocation={seteditlocation}
        onSubmit={onEdit}
      />
    </div>
  );
}

export default Campuses;
