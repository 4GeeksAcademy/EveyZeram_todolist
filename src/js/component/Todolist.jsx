import React, { useState } from "react";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

export const Todolist = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What I need to do?"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <div className="float-end">
            <i
              className="fas fa-trash-alt"
              onClick={() =>
                setTodos(
                  todos.filter(
                    (t, currentIndex) =>
                      index !== currentIndex
                  )
                )
              }
            ></i>
            </div>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};


// Tengo que hacer una lista, dentro de un div
// Con imput 
// Cada vez que añado texto se guarda en una línea
// esa línea va al final del todo