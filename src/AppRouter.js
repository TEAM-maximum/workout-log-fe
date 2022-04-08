import React from "react";
import "./index.css";
import App from "./App";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import Todo from "./todo/Todo";
import WorkoutLogAdd from "./workoutLog/WorkoutLogAdd";
import Navbar from "./Navbar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            <Route path="/todo" element={<Todo />}>
            </Route>
            <Route path="/" element={<App />}>
            </Route>
            <Route path="/workoutLog" element={<WorkoutLogAdd />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
