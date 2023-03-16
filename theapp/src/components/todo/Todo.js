/** @format */

import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import "../todo/style.css";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Form className="main-todo-form">
        <Form.Control
          className="todo-form-item"
          id="item1"
          type="text"
          placeholder="Enter new item"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button className="todo-form-item" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Form>
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Body className="todo-body">
              <Card.Title> {todo}</Card.Title>
              <Button>Add to calendar!</Button>
              <Button onClick={() => handleRemoveTodo(index)}>Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </Container>
  );
}

export default Todo;
