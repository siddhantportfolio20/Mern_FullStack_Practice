import { useSelector, useDispatch } from "react-redux";

function App() {

  const count = useSelector((state) => state.count);

  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  return (
    <div>

      <h1>Count: {count}</h1>

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

      {todos.map((todo) => (
        <div key={todo.id}>

          <span>
            {todo.text}
          </span>

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