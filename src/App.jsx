import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export function App() {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (todo) => {
        const allTodos = [...todos, todo];
        setTodos(allTodos);
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="px-5 py-4 mt-5 w-75">
                <h3 className="text-uppercase text-center fw-bold text-success">
                    Todo app
                </h3>
                <TodoForm addNewTodo={addNewTodo} />
                {todos.length > 0 ? (
                    <>
                        <div className="dropdown-divider my-4" />
                        <TodoList todos={todos} />
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default App;

