import React from "react";

import { List, makeStyles, Box } from "@material-ui/core";

import TodoListItem from "./TodoListItem/TodoListItem";

const TodoListItems = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      margin: "auto",
      // boxShadow: "0 2px 1px rgba(0,0,0,0.25)",
      backgroundColor: theme.palette.background.paper
    }
  }));
  const classes = useStyles();
  return (
    <Box boxShadow={1}>
      <List className={classes.root}>
        <TodoListItem
          taskLists={props.taskLists}
          handleToggle={props.handleToggle}
          deleteTask={props.deleteTask}
        />
      </List>
    </Box>
  );
};

export default TodoListItems;
