import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [text, setText] = useState("");

  const count = useSelector((state) => state.count);
  const todos = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const addTodo = () => {
    if (text.trim() === "") return;

    dispatch({
      type: "Add_todo",
      payload: {
        id: Date.now(),
        text: text,
        completed: false,
      },
    });

    setText("");
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    }

    if (filter === "pending") {
      return todo.completed === false;
    }

    return true;
  });

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* Counter */}
      <button
        onClick={() =>
          dispatch({ type: "INCREMENT" })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: "DECREMENT" })
        }
      >
        -
      </button>

      <h2>Todo List</h2>

      {/* Add Todo */}
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      {/* Filter Buttons */}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TODO",
              payload: "all",
            })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TODO",
              payload: "completed",
            })
          }
        >
          Completed
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TODO",
              payload: "pending",
            })
          }
        >
          Pending
        </button>
      </div>

      {/* Todo List */}
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>

          {/* Toggle */}
          <button
            onClick={() =>
              dispatch({
                type: "toggle",
                payload: todo.id,
              })
            }
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>

          {/* Delete */}
          <button
            onClick={() =>
              dispatch({
                type: "Remove_todo",
                payload: todo.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;