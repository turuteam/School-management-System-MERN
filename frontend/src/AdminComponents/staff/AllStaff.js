import React, { useState, useEffect } from "react";
import Search from "../shared/Search";
import StaffTable from "../shared/TableListUsers";
import axios from "../../store/axios";
import { errorAlert } from "../../utils";
import Loading from "../../Loading";

const headCells = [
  { id: "userID", numeric: false, disablePadding: false, label: "Teacher ID" },
  { id: "photoUrl", numeric: false, disablePadding: false, label: "Photo" },
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  {
    id: "middlename",
    disablePadding: true,
    label: "Middle Name",
  },
  { id: "surname", disablePadding: true, label: "Last Name" },
  { id: "class", disablePadding: false, label: "Class" },
  { id: "Gender", disablePadding: false, label: "Gender" },
];

function AllStaff() {
  const [name, setname] = useState("");
  const [userID, setuserID] = useState("");
  const [staff, setstaff] = useState([]);
  const [storeData, setstoreData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios.get("/teachers").then((res) => {
      setloading(false);
      setstaff(res.data);
      setstoreData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    let ans = window.confirm(`Are sure you want to delete user ${id}`);
    if (ans) {
      axios.delete(`/user/delete/${id}`).then((res) => {
        if (res.data.error) {
          errorAlert(res.data.error);
        }
        setstaff(staff.filter((i) => i.userID !== id));
      });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setstaff(storeData);
    setname("");
    setuserID("");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    let newStaff = [];
    if (name) {
      newStaff = storeData.filter(
        (i) =>
          i.name.toLowerCase().includes(name.toLowerCase()) ||
          i.surname.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (userID) {
      newStaff = storeData.filter((i) =>
        i.userID.toLowerCase().includes(userID.toLowerCase())
      );
    }
    setstaff(newStaff);
  };

  const inputFields = [
    {
      type: "text",
      label: "Search by Name",
      name: "",
      value: name,
      onChange: setname,
    },
    {
      type: "text",
      label: "Search by UserID",
      name: "",
      value: userID,
      onChange: setuserID,
    },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="content__container">
          <Search
            inputFields={inputFields}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <StaffTable
            route="staff"
            loading={loading}
            students={staff}
            handleDelete={handleDelete}
            headCells={headCells}
          />
        </div>
      )}
    </>
  );
}

export default AllStaff;
