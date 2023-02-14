import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const todosCol = collection(db, "todos");
      const unsubscribe = await onSnapshot(todosCol, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setTodos(docs);
      });
    };
    getUsers();
  }, []);

  const addTodo = async () => {
    const docref = await addDoc(collection(db, "todos"), {
      completed: false,
      todo: "Add task..",
    });
  };
  return (
    <div>
      {todos.map((todoItem) => {
        return (
          <TodoItem
            completed={todoItem.completed}
            todo={todoItem.todo}
            id={todoItem.id}
          />
        );
      })}
      <div className="add-button" aria-label="add">
        <Fab color="primary">
          <AddIcon onClick={addTodo} />
        </Fab>
      </div>
    </div>
  );
};

export default Todos;
