import React from "react";
import {
  makeStyles,
  Paper,
  IconButton,
  InputBase,
  Divider
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "10px auto",
    boxSizing: "border-box"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));
const TodoForm = props => {
  const classes = useStyles();
  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={props.addNewTask}
    >
      <InputBase
        className={classes.input}
        placeholder="What you want to do today"
        inputProps={{ "aria-label": "What you want to do today" }}
        onChange={props.taskInput}
        value={props.currentValue}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        color="primary"
        className={classes.iconButton}
        aria-label="add"
      >
        <Add />
      </IconButton>
    </Paper>
  );
};

export default TodoForm;
