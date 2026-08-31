import { useEffect, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  course: "React",
  isSubmitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handleChange":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "Submit":
      return {
        ...state,
        isSubmitted: true,
      };

    case "Reset":
      return initialState;

    default:
      return state;
  }
};

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle input changes
  const handleChange = (e) => {
    dispatch({
      type: "handleChange",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "Submit",
    });
  };

  // Reset form
  const handleReset = () => {
    dispatch({
      type: "Reset",
    });
  };

  // Hide success message after 5 seconds
  useEffect(() => {
    if (state.isSubmitted) {
      const timer = setTimeout(() => {
        dispatch({
          type: "Reset",
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.isSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <br />
      <br />

      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <br />
      <br />

      <select
        name="course"
        value={state.course}
        onChange={handleChange}
      >
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Node">Node</option>
      </select>

      <br />
      <br />

      <button type="submit">
        Submit
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {state.isSubmitted && (
        <p>Form submitted successfully!</p>
      )}
    </form>
  );
}