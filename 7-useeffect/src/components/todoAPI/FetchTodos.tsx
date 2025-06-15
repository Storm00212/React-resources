import './todo.css'
import React, { useEffect, useState } from "react";

type Todo = {
    id: number;
    userId: number;
    todoName: string;
    createdAt: string;
    dueDate: string;
    description: string;
    isCompleted: boolean;
};

const API_URL = "http://localhost:8081/todos";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Failed to fetch todos"); //200 status code 
                const result = await response.json();
                setTodos(result.data);
            } catch (err) {
                console.error("Error fetching todos:", err);
                alert("Failed to fetch todos. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <h1 className="todo-title">Todo List</h1>
            <div className="todo-list">

                {todos.map(todo => (
                    <div className="todo" key={todo.id}>
                        <p className="user-id">User ID: {todo.userId}</p>
                        <p className="todoName"><strong>{todo.todoName}</strong></p>
                        <p className="todo-description">Description: {todo.description}</p>
                        <p className="due-date">Due: {new Date(todo.dueDate).toLocaleString()}</p>
                        <p className="todo-status">Status: {todo.isCompleted ? "Completed" : "Pending"}</p>
                        <p className="created-at">Created At: {new Date(todo.createdAt).toLocaleString()}</p>

                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;