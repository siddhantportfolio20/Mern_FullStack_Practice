import { createStore } from "redux";

const initialState = {
  count: 0,

  todo: [
    {
      id: 1,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: true,
    },
    {
      id: 3,
      text: "Practice JavaScript",
      completed: false,
    },
  ],

  filter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "Add_todo":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case "Remove_todo":
      return {
        ...state,
        todo: state.todo.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    case "toggle":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };

    // FILTER
    case "FILTER_TODO":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;