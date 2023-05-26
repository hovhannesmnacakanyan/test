import React, { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const initialTodos = [
    { id: 1, text: "item 1", isDone: false },
    { id: 2, text: "item 2", isDone: false },
    { id: 3, text: "item 3", isDone: false },
    { id: 4, text: "item 4", isDone: false },
    { id: 5, text: "item 5", isDone: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState("");

  const handleCheckChange = (id) => {
    setTodos((prev) => {
      const copyPrev = [...prev];

      const todo = copyPrev.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;

      return copyPrev;
    });
  };

  const addTodo = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: prev.at(-1).id + 1, text: value, isDone: false },
    ]);

    setValue("");
  };

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <input onChange={(e) => handleChange(e.target.value)} value={value} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              handleCheckChange={handleCheckChange}
              key={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
};
