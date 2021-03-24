import React, { useState, useEffect } from "react";
import ClassCard from "../../components/courses/ClassCard";
import { selectUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import axios from "../../store/axios";

function AllCourses() {
  const [courses, setcourses] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    axios.get(`/courses/teacher/${user?.id}`).then((res) => {
      console.log(res);
      if (res.data.success) {
        setcourses(res.data?.docs);
        ///teacher/${user?.userID}
      }
    });
  }, [user]);

  return (
    <div>
      <h3>My Tutorial Courses</h3>
      <div className="row mt-5">
        {courses?.length > 0 ? (
          courses?.map((e) => <ClassCard key={e._id} id={e.code} />)
        ) : (
          <ClassCard />
        )}
      </div>
    </div>
  );
}

export default AllCourses;
