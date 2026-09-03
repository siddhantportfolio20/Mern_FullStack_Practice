import { createStore } from "redux";

const initialState = {
  count: 0,

  todo: [
    {
      id: 1,
      text: "Learn Redux",
    },
    {
      id: 2,
      text: "Learn React",
    },
    {
      id: 3,
      text: "Practice JavaScript",
    },
  ],
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

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;