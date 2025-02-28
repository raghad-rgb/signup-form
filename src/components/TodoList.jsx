import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoDelete }) => {
    return (
        <>
            {todos.map((todo) => (
                 <TodoItem todo={todo} key={todo.id} onTodoDelete={onTodoDelete} />
            ))}
        </>
    );
};

export default TodoList;
