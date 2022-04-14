import React, {useState, useEffect} from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import moment from 'moment'

// import "./App.css";
import WorkoutLog from "./workoutLog/WorkoutLog";
import Calendar from 'react-calendar';
import './calendar.css'

const App = () => {
  const [value, onChange] = useState(new Date());
  const [logPage, setLogPage] = useState(false);

  useEffect(()=> {
    console.log(value)
  }, [value]);
  
  const nextPage = (value) => {
    onChange(value);
    setLogPage(true)
  }

  var calendarComp = (
    <Grid container>

      <Grid item xs={12} sm={12}>
        <br/>
        <Typography align="center">- 운동 일지 입력 -</Typography>
        <br/>
        <Calendar onChange={onChange} value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("DD")} // 날짜 표기 '일' 제거
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        onClickDay = {(value, event) => {nextPage(value)}}
        />
      </Grid>
    </Grid>
  );
  
  return (
    <div className="App">
      <Container maxWidth="md">
        <div>{logPage ? <WorkoutLog date={value} previousPage={setLogPage} ></WorkoutLog> : calendarComp}</div>
      </Container>
    </div>
  );
};

export default App;
