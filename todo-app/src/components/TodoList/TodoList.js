import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((item) => (
        <Todo key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
