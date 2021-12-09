import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import {
  CloseCircleOutlined,
  PlusCircleOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import "./Todo.css";


const Todo = ({ todo }) => {
  const [todoEdit, setTodoEdit] = useState(null);
  const [inputValue, setInputValue] = useState(todo.text);
  const { todos, setTodos, deleteTodoHandler, completedTodoHandler } =
    useContext(TodoContext);

  const editTodoHandler = (todo, inputValue) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...todo, title: inputValue } : item
    );
    setTodos(updatedTodos);
  };

  const renderDeleteAndEditIcons = () => {
    if (todoEdit === todo.id) return null;

    return (
      <>
        <EditOutlined
          style={{
            marginRight: 8,
            fontSize: 25,
            color: "#34b356",
            cursor: "pointer",
          }}
          onClick={() => setTodoEdit(todo.id)}
        />
        {!todo.completed ? (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontSize: 25,
              cursor: "pointer",
            }}
            onClick={() => deleteTodoHandler(todo.id)}
          />
        ) : (
          <PlusCircleOutlined
            style={{ color: "green", fontSize: 20, cursor: "pointer" }}
            onClick={() => completedTodoHandler(todo)}
          />
        )}
      </>
    );
  };
  return (
    <div id={todo.id} className="todo">
      <span
        className="text"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todoEdit === todo.id ? (
          <Input
            style={{ padding: "5px", fontSize: "15px" }}
            placeholder={todo.title}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          todo.title
        )}
      </span>
      <span>
        {todoEdit === todo.id ? (
          <CheckCircleOutlined
            style={{
              marginRight: 8,
              fontSize: 25,
              color: "#34b356",
              cursor: "pointer",
            }}
            onClick={() => {
              editTodoHandler(todo, inputValue);
              setTodoEdit(null);
            }}
          />
        ) : null}
        {renderDeleteAndEditIcons()}
      </span>
    </div>
  );
};

export default Todo;
