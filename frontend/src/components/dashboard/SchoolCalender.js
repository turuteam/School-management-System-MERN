import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "../../store/axios";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

function SchoolCalender({ user }) {
  const [events, setevents] = useState([]);

  useEffect(() => {
    axios.get("/calendar").then((res) => {
      console.log(res.data);
      setevents(res.data);
    });
  }, []);
  return (
    <div className="content__container">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-4">School Event Calender</h3>
        {user === "admin" && (
          <Link to="/academics/calender/add" className="btn blue__btn">
            Add New Event
          </Link>
        )}
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default SchoolCalender;
