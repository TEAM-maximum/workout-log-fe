import React, {useState, useEffect} from "react";
import { Grid, Button } from "@material-ui/core";
import WorkoutTarget from "./WorkoutTarget";
import WorkoutName from "./WorkoutName";
import WorkoutSet from "./WorkoutSet";

import { call } from "../service/ApiService";

const WorkoutLogAdd = () => {
    const [date, setDate] = useState("2022-02-22");
    const [setOrder, setSetOrder] = useState(1);
    const [target, setTarget] = useState("");
    const [name, setName] = useState("");
    const [weights, setWeights] = useState(["0"]);
    const [reps, setReps] = useState(["0"]);
    const [targets] = useState(["가슴", "어깨", "등", "하체", "삼두", "이두", "복부", "전완", "엉덩이", "전신"])
    const [category, setCategory] = useState([]);

    useEffect(() => {
      if(localStorage.getItem("ACCESS_TOKEN") === "null") {
        window.location.href = "/login";
      }
      //TODO : setOrder 서버로부터 받아와서 state 변경
      call("/workoutcategory", "GET", null).then((response) => {
        setCategory(response.data);
      })
    }, []);
    
    useEffect(() => {
      console.log("target:", target, "name:", name)
    }, [target, name]);

    const workoutLogSubmit = () => {
      var tempReps = reps.length.toString()
      var tempWeights = reps.length.toString()
      reps.forEach(element => {
        tempReps = tempReps + "-" + element
      });
      weights.forEach(element => {
        tempWeights = tempWeights + "-" + element
      })

      var items = {date: date, setOrder: setOrder, target: target, name: name, weight: tempWeights, reps: tempReps}

      call("/workoutlog", "POST", items).then((response) =>
        console.log(response)
      );
    };

    const setPlusClick = () => {
      setWeights(weights.concat(weights[weights.length-1]));
      setReps(reps.concat(reps[reps.length-1]));
    }

    const editReps = (idx, value) => {
      var tempReps = reps.slice();
      tempReps[idx] = value
      setReps(tempReps)
    }

    const editWeights = (idx, value) => {
      var tempWeights = weights.slice();
      tempWeights[idx] = value
      setWeights(tempWeights)
    }

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

    var workoutSets = (
      <div>
        <br/>
        {reps.map((rep, idx) => (
          <WorkoutSet rep={rep} weight={weights[idx]} idx={idx} editReps={editReps} editWeights={editWeights}></WorkoutSet>
        ))}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Button fullWidth variant="contained" onClick={setPlusClick}>
              세트 추가
            
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button fullWidth variant="contained" onClick={workoutLogSubmit}>
              submit
            </Button>
          </Grid>
      </Grid>
      </div>
    )

    var content = workoutTargetList

    if(target && !name) {
      content = workoutNameList
    }
    if(target && name) {
      content = workoutSets
    }

    return (
      <div>
        {content}
      </div>
    )
}

export default WorkoutLogAdd;