import React, { } from "react";
import { Grid, Typography, Input, Button, ButtonGroup, Divider } from "@material-ui/core";

const WorkoutSet = (props) => {
  
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3} sm={3}>
          <Typography align="center" variant="h5" gutterBottom>{props.idx+1}세트</Typography>
        </Grid>
        <Grid item xs={9} sm={9}>
          <Grid container spacing={1}>
            <Grid item xs={2} sm={2}>
              <Input type='number' value={props.weight} onChange={(event) => props.editWeights(props.idx, event.target.value)}></Input>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="h5" gutterBottom>Kg</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => props.editWeights(props.idx, (parseInt(props.weight)+5).toString())}>+5</Button>
              <Button onClick={() => props.editWeights(props.idx, (parseInt(props.weight)-5).toString())}>-5</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Input type='number' value={props.rep} onChange={(event) => props.editReps(props.idx, event.target.value)}></Input>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="h5">회</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => props.editReps(props.idx, (parseInt(props.rep)+1).toString())}>+1</Button>
              <Button onClick={() => props.editReps(props.idx, (parseInt(props.rep)-1).toString())}>-1</Button>
            </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br/>
      <Divider></Divider>
      <br/>
    </div>
  );
};

export default WorkoutSet;
