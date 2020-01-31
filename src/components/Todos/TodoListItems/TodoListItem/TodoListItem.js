import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListItem = props => {
  let renderElement = (
    <React.Fragment>
      {props.taskLists.map((task, index) => {
        const labelId = `checkbox-list-label-${task.id}`;
        return (
          <React.Fragment key={task.id}>
            <ListItem
              role={undefined}
              dense
              button
              onClick={props.handleToggle(task.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.isCompleted}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={taskId => props.deleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {index !== props.taskLists.length - 1 && <Divider light />}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
  if (!props.taskLists.length) {
    renderElement = <React.Fragment>No Task</React.Fragment>;
  }
  return renderElement;
};

export default TodoListItem;
