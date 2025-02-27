import React from "react";

const TodoItem = (props) => {
    const { todo } = props;

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-content-center">
            <h4>{todo.id}</h4>
            <div>{todo.description}</div>
            <i className="fa-solid fa-trash fs-4 text-danger"></i>
        </div>
    );
};

export default TodoItem;
