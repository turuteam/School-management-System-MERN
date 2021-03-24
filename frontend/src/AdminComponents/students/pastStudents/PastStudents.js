import React, { useState, useEffect } from "react";
import Search from "../../shared/Search";
import StudentsTable from "../../shared/TableListUsers";
import axios from "../../../store/axios";
import { selectYearGroup } from "../../../store/slices/schoolSlice";
import { useSelector } from "react-redux";
import { errorAlert } from "../../../utils";
import { pdf } from "../../../components/tables/pdf";
import Loading from "../../../Loading";

const headCells = [
  { id: "userID", numeric: false, disablePadding: false, label: "StudentID" },
  { id: "photoUrl", numeric: false, disablePadding: false, label: "Photo" },
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  {
    id: "middlename",

    disablePadding: true,
    label: "Middle Name",
  },
  { id: "surname", disablePadding: true, label: "Last Name" },
  { id: "status", disablePadding: false, label: "Status" },
  { id: "class", disablePadding: false, label: "Class" },
  { id: "Gender", disablePadding: false, label: "Gender" },
];

function AllStudents() {
  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [year, setyear] = useState("");
  const [students, setstudents] = useState([]);
  const years = useSelector(selectYearGroup);
  const [storeData, setstoreData] = useState([]);
  const [loading, setloading] = useState(false);

  const yearsOptions = years.map((e) => {
    return {
      name: e.year,
      id: e.year,
    };
  });

  useEffect(() => {
    setloading(true);
    axios.get("/students/past").then((res) => {
      setloading(false);
      setstudents(res.data);
      setstoreData(res.data);
    });
  }, []);

  const generatePDF = () => {
    const headers = [
      { key: "userID", label: "UserID" },
      { key: "name", label: "Name" },
      { key: "middleName", label: "Middle Name" },
      { key: "surname", label: " SurName" },
      { key: "gender", label: "Gender" },
      { key: "classID", label: "Class" },
    ];

    pdf({ data: students, headers, filename: "Allstudents" });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setname("");
    setid("");
    setyear("");
    setstudents(storeData);
  };

  const inputFields = [
    {
      type: "text",
      value: id,
      label: "Search by Student ID",
      name: "Student ID",
      onChange: setid,
    },
    {
      type: "text",
      label: "Search by Name",
      value: name,
      name: "Name",
      onChange: setname,
    },
    {
      type: "select",
      options: yearsOptions,
      label: "Search by Academic Year",
      value: year,
      name: "year",
      onChange: setyear,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    let newStudents = [];
    if (year) {
      newStudents = storeData.filter((i) =>
        i.classID.toLowerCase().includes(year.toLowerCase())
      );
    }
    if (name) {
      newStudents = storeData.filter(
        (i) =>
          i.name.toLowerCase().includes(name.toLowerCase()) ||
          i.surname.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (id) {
      newStudents = storeData.filter((i) =>
        i.userID.toLowerCase().includes(id.toLowerCase())
      );
    }
    setstudents(newStudents);
  };

  const handleDelete = (i) => {
    let ans = window.confirm(`Are sure you want to delete user ${i}`);
    if (ans) {
      axios.delete(`/user/delete/${i}`).then((res) => {
        if (res.data.error) {
          errorAlert(res.data.error);
        }
        setstudents(students.filter((e) => e.userID !== id));
      });
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <Search
        title="Past Students"
        handleReset={handleReset}
        handleSearch={handleSearch}
        inputFields={inputFields}
      />
      <StudentsTable
        route="students"
        handleDelete={handleDelete}
        students={students}
        noData="No past students yet"
        headCells={headCells}
      />
      <div className="d-flex justify-content-end">
        <button onClick={generatePDF} className="btn orange__btn ">
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default AllStudents;
