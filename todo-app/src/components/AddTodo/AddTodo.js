import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import "./AddTodo.css";
import { Input, Button } from "antd";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodoHandler } = useContext(TodoContext);
  return (
    <div className="addTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoHandler(inputValue);
          setInputValue("");
        }}
      >
        <Input
          type="text"
          placeholder="please enter your todo item.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button type="submit">Add todo</Button>
      </form>
    </div>
  );
};

export default AddTodo;
