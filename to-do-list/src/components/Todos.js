import React from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = [
    { completed: false, todo: "buy eggs" },
    { completed: false, todo: "buy bread" },
  ];
  return (
    <div>
      {todos.map((todoItem) => {
        return <TodoItem completed={todoItem.completed} todo={todoItem.todo} />;
      })}
    </div>
  );
};

export default Todos;
