/** @format */

import axios from "axios";
import { useState } from "react";
import Todo from "../todo/Todo.js";

const APIKEY = "cb12ad6ffdmshb45acf4175c9c96p1842c1jsnca50530ad104";
const options = {
  method: "get",
  url: "https://world-time2.p.rapidapi.com/timezone/Europe/Paris",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "world-time2.p.rapidapi.com",
  },
};
let hours;
let minutes;
let seconds;

function CalendarAPI() {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  });

  const getCalendar = () => {
    console.log("getCalendar");
    axios
      .request(options)
      .then((response) => {
        setTime({
          hours: new Date(response.data.unixtime * 1000).getHours(),
          minutes: new Date(response.data.unixtime * 1000).getMinutes(),
          seconds: new Date(response.data.unixtime * 1000).getSeconds(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Hello Calendar
      <Todo
        onClick={getCalendar}
        hours={time.hours}
        seconds={time.seconds}
        minutes={time.minutes}
      />
    </div>
  );
}
export default CalendarAPI;
