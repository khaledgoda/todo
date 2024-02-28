import React, { useRef, useState } from "react";
import "./App.css";

function Todo(props) {
  const todoRef = useRef();
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todoRef.current.value]);
  }
  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <>
      <div className="flex flex-column gap-5">
        <div className="">
          <form className="flex flex-row" onSubmit={handleSubmit}>
            <div>
              <input ref={todoRef} type="text" placeholder="Enter your todo" />
            </div>
            <div>
              <input type="submit" value="Add Todo" />
            </div>
          </form>
        </div>
        {todos.map(function (value , index) {
          return (
          <>
          <div className="flex flex-row space-between">
                <div>{value}</div>
                <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
          </>
          );
        })}
      </div>
    </>
  );
}

export default Todo;