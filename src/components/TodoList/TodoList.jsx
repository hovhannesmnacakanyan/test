import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const todos = [
    { id: 1, text: "item 1", isDone: false },
    { id: 2, text: "item 2", isDone: false },
    { id: 3, text: "item 3", isDone: false },
    { id: 4, text: "item 4", isDone: false },
    { id: 5, text: "item 5", isDone: false },
  ];

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem item={todo} key={todo.id} />;
      })}
    </ul>
  );
};
