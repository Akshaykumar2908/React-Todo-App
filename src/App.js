import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import TodoForm from "./components/Todos/TodoForm/TodoForm";
import TodoListItems from "./components/Todos/TodoListItems/TodoListItems";
import { Box } from "@material-ui/core";

function App() {
  const [singleTask, setSingleTask] = useState("");
  const [tasklists, setTasksLists] = useState([]);

  const handleToggleHandler = id => () => {
    setTasksLists(prevState => {
      const newTaskLists = prevState.map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      return newTaskLists;
    });
  };
  const onTaskInputHandler = e => {
    const enteredText = e.target.value;
    setSingleTask(enteredText);
  };
  const deleteTaskHandler = id => {
    setTasksLists(prevState => {
      return prevState.filter(task => task.id !== id);
    });
  };

  const onAddTaskHandler = e => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: singleTask,
      isCompleted: false
    };
    setTasksLists(tasklists.concat(newTask));
    setSingleTask("");
  };
  return (
    <div className="App">
      <Box>
        <h1>Todo App</h1>
      </Box>
      <Container maxWidth="sm">
        <TodoForm
          taskInput={onTaskInputHandler}
          addNewTask={onAddTaskHandler}
          currentValue={singleTask}
        />
        <TodoListItems
          taskLists={tasklists}
          handleToggle={handleToggleHandler}
          deleteTask={deleteTaskHandler}
        />
      </Container>
    </div>
  );
}

export default App;
