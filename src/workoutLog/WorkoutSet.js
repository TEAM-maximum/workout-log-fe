import React, { } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

const WorkoutSet = (props) => {
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2}>
          <Typography align="center" variant="h5" gutterBottom>{props.idx+1}세트</Typography>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Grid container spacing={1}>
            <Grid item xs={2} sm={2}>
              <TextField fullWidth variant="outlined" defaultValue={props.weight} onChange={(event) => props.editWeights(props.idx, event.target.value)}></TextField>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="h5" gutterBottom>Kg</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              + - 버튼
            </Grid>
            <Grid item xs={2} sm={2}>
              <TextField fullWidth variant="outlined" defaultValue={props.rep} onChange={(event) => props.editReps(props.idx, event.target.value)}></TextField>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="h5">회</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              + - 버튼
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default WorkoutSet;
