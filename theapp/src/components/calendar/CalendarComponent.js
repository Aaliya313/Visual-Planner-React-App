/** @format */

import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarAPI from "../CalendarApi";
import "react-calendar/dist/Calendar.css";

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <CalendarAPI></CalendarAPI>
    </div>
  );
}

export default CalendarComponent;
