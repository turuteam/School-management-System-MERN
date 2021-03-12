import React, { useState, useEffect } from "react";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import ClassDetails from "../../components/class/ClassDetails";

function AllClasses() {
  const user = useSelector(selectUser);
  const [classID, setclassID] = useState("");

  useEffect(() => {
    const getData = async () => {
      let teacher = await axios.get(`/user/${user?.userID}`);
      let classData = teacher?.data?.user;
      setclassID(classData?.classID);
    };
    getData();
  }, [user]);

  return (
    <div>
      {classID ? (
        <ClassDetails id={classID} />
      ) : (
        <div className="content__container text-center">
          No Class Details yet{" "}
        </div>
      )}
    </div>
  );
}

export default AllClasses;
