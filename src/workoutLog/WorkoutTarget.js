import React, { useState } from "react";
import { Accordion, AccordionSummary, Typography, ListItemText, TextField, Paper, Button, Grid, InputBase } from "@material-ui/core";
import {ExpandMoreIcon} from "@material-ui/icons/ExpandMore";
const AddTodo = (props) => {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            {/* workoutName컴포넌트들을 출력한다. */}
            <Typography>{props.item.target}</Typography>
            </AccordionSummary>
        </Accordion>
    </div>
  );
};

export default AddTodo;
