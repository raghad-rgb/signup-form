import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TodoItem = ({ todo, onTodoDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="alert alert-secondary d-flex justify-content-between align-content-center">
      <Link to={`/todo-details/${todo.id}`}>
        <h4>{todo.id}</h4>
      </Link>
      <div>{todo.description}</div>
      <i
        className="fa-solid fa-trash fs-4 text-danger btn"
        onClick={() => onTodoDelete(todo.id)}
      ></i>
    </div>
  );
};

export default TodoItem;
