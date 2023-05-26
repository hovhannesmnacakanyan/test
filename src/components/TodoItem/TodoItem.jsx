import React from "react";

export const TodoItem = ({ item }) => {
  return (
    <li>
      <input type="checkbox" />
      {item.text}
    </li>
  );
};
