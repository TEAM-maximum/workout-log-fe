import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider, Button } from "@material-ui/core";

import { call } from "../service/ApiService";

const WorkoutLogSetItem = (props) => {
    const [weights, setWeights] = useState([]);
    const [reps, setReps] = useState([]);

    useEffect(() => {
        setWeights(props.element.weights.split(',').slice(1));
        setReps(props.element.reps.split(',').slice(1));
      }, []);

    const workoutLogDelete = () => {
        call("/workoutlog", "DELETE", props.element).then((response) => {
          console.log(response)
          if(!response.error) {
            alert("삭제 완료")
          }
          props.setSetOrder(1) // 운동기록 재렌더링용
        });
    };
    
    return (
        <div>
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Typography>{props.element.target}|{props.element.name}</Typography>
            </Grid>
            {weights.map((w, idx) => (
                <Grid item xs={12} sm={12}>
                    <Typography align="right">{idx+1}세트 / {w}Kg / {reps[idx]}회</Typography>
                </Grid>
            ))}
            <Button size="small" variant="outlined" color="primary" onClick={workoutLogDelete}>
                삭제
            </Button>        
        </Grid>
        <br/>
        <Divider></Divider>
        <br/>
        </div>
    );
};

export default WorkoutLogSetItem;
