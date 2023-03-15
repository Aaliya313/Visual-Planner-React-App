/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Planner from "./pages/plannerPage/Planner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Planner" element={<Planner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
