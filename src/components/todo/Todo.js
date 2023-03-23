/** @format */
import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../todo/style.css";

const APIKEY = "cb12ad6ffdmshb45acf4175c9c96p1842c1jsnca50530ad104";
const options = {
  method: "get",
  url: "https://world-time2.p.rapidapi.com/timezone/Europe/Paris",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "world-time2.p.rapidapi.com",
  },
};

function Todo({ hours, minutes, seconds }) {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      console.log("getCalendar");
      axios
        .request(options)
        .then((response) => {
          const nextTodo = { id: Date.now(), text: newTodo, completed: false };
          nextTodo.hours = new Date(response.data.unixtime * 1000).getHours();
          nextTodo.minutes = new Date(
            response.data.unixtime * 1000
          ).getMinutes();
          nextTodo.seconds = new Date(
            response.data.unixtime * 1000
          ).getSeconds();
          setTodos([...todos, nextTodo]);
          setNewTodo("");
        })
        .catch((err) => {
          console.log(err);
        });
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
      <h1>Your Todos!</h1>
      <form className="todo-form" onSubmit={handleNewTodoSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo item"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button id="add-btn" type="submit">
          Add your TODO!
        </button>
      </form>
      <ul className="todos-list">
        {todos.map((todo) => (
          <div>
            <Card id="todo-card" key={todo.id}>
              <Card.Text>
                {todo.hours}:{todo.minutes}:{todo.seconds}
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
