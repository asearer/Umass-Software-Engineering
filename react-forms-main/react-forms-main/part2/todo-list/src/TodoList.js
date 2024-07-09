import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const add = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const todoComponents = todos.map((todo) => (
    <Todo id={todo.id} key={todo.id} todo={todo.todo} handleRemove={remove} />
  ));
  return (
    <div>
      <NewTodoForm createTodo={add} />
      {todoComponents}
    </div>
  );
}

export default TodoList;
