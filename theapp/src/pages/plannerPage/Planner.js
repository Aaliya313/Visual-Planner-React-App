/** @format */

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Todo from "../../components/todo/Todo";

function Planner() {
  return (
    <div>
      <Header />
      <br />
      <Todo />
      <br />
      <Footer />
    </div>
  );
}

export default Planner;
