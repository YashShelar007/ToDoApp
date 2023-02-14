import React from "react";
import { Checkbox, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./TodoItem.css";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const TodoItem = (props) => {
  const handleCompleted = async () => {
    await setDoc(doc(db, "todos", props.id), {
      completed: !props.completed,
      todo: props.todo,
    });
  };

  const handleChangeText = async (e) => {
    await setDoc(doc(db, "todos", props.id), {
      completed: props.completed,
      todo: e.target.value,
    });
  };

  const handleDeleteDocument = async () => {
    await deleteDoc(doc(db, "todos", props.id));
  };

  return (
    <div className="root">
      <Checkbox
        name="completed"
        checked={props.completed}
        color="primary"
        onClick={handleCompleted}
      />
      <div className="content">
        <TextField
          onChange={handleChangeText}
          name="todo"
          value={props.todo}
          multiline
          style={{ width: "100%" }}
        />
        <IconButton onClick={handleDeleteDocument} name="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
