import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
    </div>
  );
};

export default Todos;
