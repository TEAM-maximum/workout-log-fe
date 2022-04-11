import React, { } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

const WorkoutName = (props) => {

  const onItemClick = (e) => {
    props.setName(e.target.innerText);
  };
  
  return (
    <div> 
        <List>
        {props.category.map((item, idx) => {
            if(item.target === props.target){
                return(
                    <ListItem button key={idx} onClick={onItemClick}>
                        <ListItemText >{item.name}</ListItemText>
                    </ListItem>
                )
            }
        }
        )}
        </List>
        <Button fullWidth variant="contained" onClick={props.resetTarget}>
              뒤로가기
        </Button>
    </div>
  );
};

export default WorkoutName;
