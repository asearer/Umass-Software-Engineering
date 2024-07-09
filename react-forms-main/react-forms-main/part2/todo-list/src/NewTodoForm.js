import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const [formData, setFormData] = useState({
    todo: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createTodo({ ...formData, id: uuid() });
    setFormData({ todo: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="todo">Todo</label>
          <input
            onChange={handleChange}
            type="text"
            name="todo"
            value={formData.todo}
            id="todo"
          />
        </div>
        <button id="newTodoButton">Add a new todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
