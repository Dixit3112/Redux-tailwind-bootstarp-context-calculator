import React from "react";

const Todo = ({ todo, handleEdit, handleDelete }) => {
  return (
    <div className="todo-item">
      <div>
        <span>
          <strong>Name:</strong> {todo.name}
        </span>
        <span>
          <strong>Email:</strong> {todo.email}
        </span>
        <span>
          <strong>Password:</strong> {todo.password}
        </span>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
