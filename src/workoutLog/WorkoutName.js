import React, { } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const WorkoutName = (props) => {

  const onItemClick = (e) => {
    console.log("name select")
    props.setName(e.target.innerText);
  };
  
  return (
    <div> 
        <List>
        {props.category.map((item, idx) => {
            if(item.target === props.target){
                return(
                    <ListItem button key={idx}>
                        <ListItemText onClick={onItemClick}>{item.name}</ListItemText>
                    </ListItem>
                )
            }
        }
        )}
        </List>
    </div>
  );
};

export default WorkoutName;
