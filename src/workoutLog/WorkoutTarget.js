import React, { } from "react";
import { Typography, Card, CardActionArea, CardContent} from "@material-ui/core";

const WorkoutTarget = (props) => {

  const onItemClick = (e) => {
    props.setTarget(e.target.innerText);
  };
  
  return (
    <div>
      <Card>
        <CardActionArea onClick={onItemClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{props.targetItem}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WorkoutTarget;
