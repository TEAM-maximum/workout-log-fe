import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import Todo from "./Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
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
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
