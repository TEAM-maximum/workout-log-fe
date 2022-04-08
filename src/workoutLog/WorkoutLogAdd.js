import React, {useState, useEffect} from "react";
import WorkoutTarget from "./WorkoutTarget";
import WorkoutName from "./WorkoutName";
import WorkoutSet from "./WorkoutSet";

import { call } from "../service/ApiService";

const WorkoutLogAdd = () => {
    const [date, setDate] = useState("2022-02-22");
    const [setOrder, setSetOrder] = useState("");
    const [target, setTarget] = useState("");
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [targets, setTargets] = useState(["가슴", "어깨", "등", "하체", "삼두", "이두", "복부", "전완", "엉덩이", "전신"])
    const [category, setCategory] = useState([]);

    useEffect(() => {
      if(localStorage.getItem("ACCESS_TOKEN") === "null") {
        window.location.href = "/login";
      }
      call("/workoutcategory", "GET", null).then((response) => {
        setCategory(response.data);
      })
    }, []);
    
    useEffect(() => {
      console.log("target:", target, "name:", name)
    }, [target, name]);


    var workoutTargetList = (
      <div>
          {targets.map((targetItem, idx) => (
            <WorkoutTarget key={idx} targetItem={targetItem} setTarget={setTarget}></WorkoutTarget>
          ))}
      </div>
    );

    var workoutNameList = (
      <WorkoutName target={target} category={category} setName={setName}></WorkoutName>
    )

    var workoutSet = (
      <WorkoutSet></WorkoutSet>
    )

    var content = workoutTargetList

    if(target) {
      content = workoutNameList
    }
    if(name) {
      content = workoutSet
    }

    return (
      <div>
        {content}
      </div>
    )
}

export default WorkoutLogAdd;