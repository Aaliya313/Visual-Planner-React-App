/** @format */

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CalendarAPI from "../../components/APIs/CalendarApi";
import "../plannerPage/style.css";

function Planner() {
  return (
    <div>
      <Header />
      <br />
      <br />
      
      <div className="planner-container">
        <CalendarAPI></CalendarAPI>
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
