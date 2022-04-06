import React, {useState, useEffect} from "react";
import WokroutTarget from "./WorkoutTarget";

const WorkoutLog = () => {
    const [date, setDate] = useState();
    const [setOrder, setSetOrder] = useState();
    const [target, setTarget] = useState();
    const [name, setName] = useState();
    const [weight, setWeight] = useState();
    const [reps, setReps] = useState();
    const [category, setCategory] = useState([{target: "가슴"}, {target: "하체"}, {target: "어깨"}, {target: "등"}]);

    useEffect(() => {
        if(localStorage.getItem("ACCESS_TOKEN") === "null") {
          window.location.href = "/login";
        }
      }, []);
    
    return (
        <div>
            {category.map((item, idx) => (
            <WokroutTarget item={item}></WokroutTarget>
            ))}
        </div>
    )
}

export default WorkoutLog;