import React from "react";
import { Checkbox, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="root">
      <Checkbox name="completed" checked={props.completed} color="primary" />
      <div className="content">
        <TextField
          name="todo"
          value={props.todo}
          multiline
          style={{ width: "100%" }}
        />
        <IconButton name="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
