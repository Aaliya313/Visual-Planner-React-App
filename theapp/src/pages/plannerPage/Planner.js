/** @format */

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Todo from "../../components/todo/Todo";
import CalendarComponent from "../../components/calendar/CalendarComponent";
import "../plannerPage/style.css";

function Planner() {
  return (
    <div>
      <Header />
      <br />
      <br />
      
      <div className="planner-container">
        <CalendarComponent />
        <Todo />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Planner;
