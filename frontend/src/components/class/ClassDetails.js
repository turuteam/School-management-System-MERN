import React, { useState, useEffect } from "react";
import StudentsTable from "../../AdminComponents/shared/TableListUsers";
import axios from "../../store/axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { selectStaff, selectCampuses } from "../../store/slices/schoolSlice";
//import {selectUser} from '../../store/slices/userSlice';

const headCells = [
  { id: "userID", numeric: false, disablePadding: false, label: "StudentID" },
  { id: "photoUrl", numeric: false, disablePadding: false, label: "Photo" },
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  {
    id: "middlename",
    numeric: true,
    disablePadding: true,
    label: "Middle Name",
  },
  { id: "surname", numeric: true, disablePadding: true, label: "Last Name" },
  { id: "class", numeric: true, disablePadding: false, label: "Class" },
  { id: "Gender", numeric: true, disablePadding: false, label: "Gender" },
];

function AllClasses({ id }) {
  const [students, setstudents] = useState([]);
  const [classDetails, setclassDetails] = useState({});
  const [loading, setloading] = useState(false);
  const staff = useSelector(selectStaff);
  const campus = useSelector(selectCampuses);
  const user = useSelector(selectUser);

  const classTeacher = staff.find((e) => e.userID === classDetails?.teacherID);
  console.log(classTeacher);

  const classcampus = campus.find((e) => e._id === classDetails?.campusID);

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      await axios.get(`/classes/classCode/${id}`).then((res) => {
        setclassDetails(res.data.docs);
        console.log(res.data);
      });
      await axios
        .get(`/students/class/${id}`)
        .then((res) => {
          setloading(false);
          setstudents(res.data.users);
          console.log(res.data);
        })
        .catch((err) => {
          setloading(false);
          console.log(err);
        });
    };
    getData();
  }, [id]);

  return (
    <div>
      <div className="mb-5">
        <div className="content__container px-5">
          <h3 className="mb-4">Class {classDetails?.name}</h3>
          <div className="d-flex flex-wrap justify-content-around">
            <div className="mb-4 text-center">
              <h6>Total Number of Students</h6>
              <h5>
                {students?.length > 0 ? (
                  students?.length
                ) : (
                  <span className="text-danger">no students yet </span>
                )}
              </h5>
            </div>
            <div className="mb-4 text-center">
              <h6>Class Teacher</h6>
              <h5>
                {classDetails?.teacherID || (
                  <span className="text-danger">not appointed yet </span>
                )}
              </h5>
            </div>
            <div className="mb-4 text-center">
              <h6>Class Prefect</h6>
              <h5>
                {classDetails?.prefect || (
                  <span className="text-danger">not appointed yet </span>
                )}
              </h5>
            </div>
            <div className="mb-4 text-center">
              <h6>Campus</h6>
              <h5>
                {classcampus?.name || (
                  <span className="text-danger">not appointed yet </span>
                )}
              </h5>
            </div>
          </div>
        </div>
      </div>
      {user?.role !== "student" && (
        <>
          <div className="float-right mb-5">
            <Link
              className="btn blue__btn mt-3"
              to={`/academics/classes/attendance/record/${id}`}
            >
              Register Today's Attendance
            </Link>
            <Link
              className="btn blue__btn ml-2 mt-3"
              to={`/academics/classes/attendance/${id}`}
            >
              View Attendance Records
            </Link>
          </div>
          <h3 className="my-5">Class Students</h3>
          <StudentsTable
            route="students"
            loading={loading}
            students={students}
            headCells={headCells}
          />
        </>
      )}
    </div>
  );
}

export default AllClasses;
