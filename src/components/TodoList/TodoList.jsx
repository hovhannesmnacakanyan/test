import React, { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { getLocaleItem, setLocaleItem } from "../../helpers";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storageTodos = getLocaleItem("todos");

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    setLocaleItem("todos", todos);
  }, [todos]);

  const toggleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

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

    setTodos((prev) => {
      return [
        ...prev,
        { id: (prev.at(-1)?.id || 0) + 1, text: value, isDone: false },
      ];
    });

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
              isVisible={isVisible}
              toggleVisible={toggleVisible}
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
