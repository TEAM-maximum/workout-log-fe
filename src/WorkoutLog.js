import React from "react";
import Navbar from "./Navbar.js";
const WorkoutLog = () => {
    const btnStyle = {
        color: "white",
        background: "teal",
        padding: ".375rem .75rem",
        border: "1px solid teal",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
      };
      
    return (
        <div>
            <Navbar></Navbar>
            <div style={btnStyle}>WorkoutLog 테스트 페이지</div>
        </div>
        
    )
}

export default WorkoutLog;