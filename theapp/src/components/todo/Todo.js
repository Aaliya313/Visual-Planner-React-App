/** @format */

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../todo/style.css";

function Todo({ hours, minutes, seconds, onClick }) {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    } else {
      toast.error("Please enter a todo item");
    }
  };

  const handleTodoDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoToggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo item"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <div>
            <Card key={todo.id}>
              <Card.Text onClick={onClick}>
                {hours}:{minutes}:{seconds}
              </Card.Text>
              <Card.Header
                className={todo.completed ? "todo-completed" : ""}
                onClick={() => handleTodoToggleComplete(todo.id)}
              >
                {todo.text}
              </Card.Header>

              <Card.Footer>
                <FaTrashAlt
                  className="delete-icon my-icon"
                  onClick={() => handleTodoDelete(todo.id)}
                />
                {todo.completed && (
                  <FaCheckCircle className="complete-icon my-icon" />
                )}
              </Card.Footer>
            </Card>
          </div>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default Todo;
