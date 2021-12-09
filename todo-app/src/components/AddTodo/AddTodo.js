import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import './AddTodo.css'
import {Input, Button} from 'antd'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodoHandler } = useContext(TodoContext);
  return (
    <div className="addTodo">
      <Input
      type="text"
      placeholder="please enter your todo item.."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} />
      
      <Button
      type="primary"
        onClick={() => {
          addTodoHandler(inputValue);
          setInputValue("");
        }}
      >
        Add todo
      </Button>
    </div>
  );
};

export default AddTodo;
