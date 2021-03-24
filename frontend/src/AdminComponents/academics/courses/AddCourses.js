import React, { useState } from "react";
import AddForm from "./CourseForm";
import GoBack from "../../shared/GoBack";
import axios from "../../../store/axios";
import { errorAlert, successAlert } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, selectCourses } from "../../../store/slices/schoolSlice";

function AddCourses() {
  const [name, setname] = useState("");
  const [code, setcode] = useState("");
  const [loading, setloading] = useState("");
  const [type, settype] = useState("");
  const [teacher, setteacher] = useState("");
  const [classesArr, setclassesArr] = useState([]);
  const [classID, setclassID] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  // useEffect(() => {
  //     axios.get('/').then(res => {

  //     })
  // }, [])

  const handleSetclasses = (e) => {
    setclassID(e);
    let newClasses = classesArr.push(e);
    setclassesArr(newClasses);
  };

  const handleAddCourse = () => {
    setloading(true);
    axios
      .post("/courses/create", {
        name,
        code,
        type,
        teacher,
        classID,
        classes: classesArr,
      })
      .then((res) => {
        if (res.data.error) {
          setloading(false);
          errorAlert(res.data.error);
          return 0;
        }
        dispatch(setCourses([res.data.doc, ...courses]));
        setloading(false);
        successAlert("successfull added");
        setname("");
        setcode("");
        setteacher("");
        settype("");
      })
      .catch(() => {
        setloading(false);
        errorAlert("sorry something when wrong");
      });
  };

  return (
    <>
      <GoBack link="/academics/courses" name="Go back to Courses List" />
      <div className="content__container">
        <h3>Add New Course</h3>
        <AddForm
          onSubmit={handleAddCourse}
          name={name}
          handleSetclasses={handleSetclasses}
          setname={setname}
          code={code}
          teacher={teacher}
          setteacher={setteacher}
          type={type}
          classID={classID}
          settype={settype}
          loadin={loading}
          setcode={setcode}
        />
      </div>
    </>
  );
}

export default AddCourses;
