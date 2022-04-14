import React, {useState, useEffect} from "react";
import { Container, Button, Divider, Typography } from "@material-ui/core";
import moment from 'moment'

import WorkoutLogAdd from "./WorkoutLogAdd";
import WorkoutLogSetItem from "./WorkoutLogSetItem";

import { call } from "../service/ApiService";

const WorkoutLog = (props) => {
    const [date, setDate] = useState(moment(props.date).format("YYYY-MM-DD"));
    const [setOrder, setSetOrder] = useState(1);
    const [logData, setLogData] = useState([]);
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
      if(localStorage.getItem("ACCESS_TOKEN") === "null") {
        window.location.href = "/login";
      }
    }, []);

    useEffect(() => {
      call("/workoutlog?date="+date, "GET", null).then((response) => {
        setSetOrder(response.data.length);
        setLogData(response.data)
      })
    }, [nextPage])

    useEffect(() => {
        console.log("received log data: ",logData);
    }, [logData])

    var logs = (
        <div>
        <br/>
        <Container maxWidth="md">
          <Typography>운동일지 : {date}</Typography>
          <Divider></Divider>
          <br/>

          {logData.map((element, idx) => (
              <WorkoutLogSetItem idx={idx} element={element}></WorkoutLogSetItem>
          ))}
          <br/>

          <Button fullWidth variant="contained" onClick={()=>setNextPage(true)}>
            새 종목 입력
          </Button>

          <Button fullWidth variant="contained" onClick={()=>props.previousPage(false)}>
            뒤로가기
          </Button>
        </Container>
      </div>
    )

    var workoutLogAdd = (
        <WorkoutLogAdd date={date} setOrder={setOrder} setNextPage={setNextPage}></WorkoutLogAdd>
    )

    return (
        <div>{nextPage ? workoutLogAdd : logs }</div>
    )
}

export default WorkoutLog;