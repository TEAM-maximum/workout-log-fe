import React, {useState, useEffect} from "react";
import { Container, Button, Divider, Typography } from "@material-ui/core";

import WorkoutLogAdd from "./WorkoutLogAdd";
import WorkoutLogSetItem from "./WorkoutLogSetItem";

import { call } from "../service/ApiService";

const WorkoutLog = () => {
    const [date, setDate] = useState("2022-02-22");
    const [setOrder, setSetOrder] = useState(1);
    const [logData, setLogData] = useState([]);
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
      if(localStorage.getItem("ACCESS_TOKEN") === "null") {
        window.location.href = "/login";
      }
      call("/workoutlog?date="+date, "GET", null).then((response) => {
        setSetOrder(response.data.length);
        setLogData(response.data)
      })
    }, []);

    useEffect(() => {
        console.log(logData);
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