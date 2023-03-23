/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import MeetingPage from "./pages/meetingsPage/MeetingPage";
import Planner from "./pages/plannerPage/Planner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/planner" element={<Planner />}></Route>
        <Route path="/meetings" element={<MeetingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
