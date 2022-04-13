import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

const WorkoutLogSetItem = (props) => {
    const [weights, setWeights] = useState([]);
    const [reps, setReps] = useState([]);

    useEffect(() => {
        setWeights(props.element.weight.split(',').slice(1));
        setReps(props.element.reps.split(',').slice(1));
      }, []);
    
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
        </Grid>
        <br/>
        <Divider></Divider>
        <br/>
        </div>
    );
};

export default WorkoutLogSetItem;
