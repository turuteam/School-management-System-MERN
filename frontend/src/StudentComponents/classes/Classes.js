import React, { useEffect, useState } from "react";
import { selectUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import axios from "../../store/axios";
import ClassDetails from "../../components/class/ClassDetails";

function Classes() {
  const user = useSelector(selectUser);
  const [classID, setclassID] = useState({});

  useEffect(() => {
    const getData = async () => {
      let student = await axios.get(`/user/${user?.id}`);
      let classData = student?.data?.user;
      console.log(classData?.classID);
      setclassID(classData?.classID);
    };
    getData();
  }, [user]);

  return (
    <div>
      <div className="content__container">
        <h3>Class Details</h3>
        {classID ? (
          <ClassDetails id={classID} />
        ) : (
          <div>No Class Details yet </div>
        )}
      </div>
    </div>
  );
}

export default Classes;
