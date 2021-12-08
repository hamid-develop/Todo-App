import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodoHandler } = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        placeholder="please enter your todo.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoHandler(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
