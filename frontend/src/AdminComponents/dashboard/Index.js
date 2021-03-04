import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SchoolCalender from "../../components/dashboard/SchoolCalender";
import Population from "./SchoolPopulation";
//import Attendance from './Attendance';
import NoticeBoard from "../../components/dashboard/NoticeBoard";
import AcademicYear from "./AcademicYear";
import axios from "../../store/axios";
import Loading from "../../Loading";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

function Index() {
  const [count, setcount] = useState(0);
  const [events, setevents] = useState([]);
  const user = useSelector(selectUser);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios.get("/count").then((res) => {
      if (res?.data) {
        setcount(res.data);
        setloading(false);
      }
    });
  }, []);

  useEffect(() => {
    axios.get("/calendar").then((res) => {
      console.log(res.data);
      setevents(res.data);
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <>
        {/* cards */}
        <Cards counts={count} />
        <div className="row mb-5">
          <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
            <SchoolCalender events={events} user={user.role} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
            <NoticeBoard isDashboard={true} user={user.role} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
            {!loading && (
              <Population
                femaleStudents={count?.femaleStudents}
                maleStudents={count?.maleStudents}
              />
            )}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6  mb-5">
            <AcademicYear isEdit={true} />
          </div>
        </div>
      </>
    </>
  );
}

export default Index;
