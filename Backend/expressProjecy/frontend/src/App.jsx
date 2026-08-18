import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  /* =========================
     GET TODOS
  ========================= */

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todo`);

      console.log(res.data);

      setTodos(res.data.data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /* =========================
     ADD TODO
  ========================= */

  const addTodo = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/todo`, {
        task: task.trim(),
        completed: false,
      });

      setTodos((prevTodos) => [...prevTodos, res.data.data]);

      setTask("");
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };

  /* =========================
     EDIT TODO
  ========================= */

  const editTodo = async (todo) => {
    const newTask = prompt("Enter new task", todo.task);

    // User clicked Cancel
    if (newTask === null) {
      return;
    }

    // Empty task
    if (newTask.trim() === "") {
      return;
    }

    try {
      const res = await axios.put(`${API_URL}/todo/${todo.id}`, {
        task: newTask.trim(),
      });

      const updatedTodo = res.data.data;

      setTodos((prevTodos) =>
        prevTodos.map((currentTodo) =>
          currentTodo.id === todo.id ? updatedTodo : currentTodo
        )
      );
    } catch (error) {
      console.log("Error editing todo:", error);
    }
  };

  /* =========================
     TOGGLE TODO
  ========================= */

  const toggleTodo = async (id) => {
    try {
      const res = await axios.patch(
        `${API_URL}/todo/toggle-completed/${id}`
      );

      const updatedTodo = res.data.data;

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        )
      );
    } catch (error) {
      console.log("Error toggling todo:", error);
    }
  };

  /* =========================
     DELETE TODO
  ========================= */

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todo/${id}`);

      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
      );
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  /* =========================
     UI
  ========================= */

  return (
    <div>
      <h1>Todo App</h1>

      {/* ADD TODO */}

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          Add Todo
        </button>
      </form>

      <hr />

      {/* TODO LIST */}

      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            {/* CHECKBOX */}

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            {/* TASK */}

            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                marginRight: "20px",
              }}
            >
              {todo.task}
            </span>

            {/* EDIT */}

            <button onClick={() => editTodo(todo)}>
              Edit
            </button>

            {/* DELETE */}

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;