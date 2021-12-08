import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const todosUpdated = [
      ...todos,
      {
        id: uuid(),
        title: text,
        completed: false,
      },
    ];
    setTodos(todosUpdated);
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const completedTodoHandler = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  };

  

  return (
    <TodoContext.Provider
      value={{ todos, addTodoHandler, deleteTodoHandler, completedTodoHandler }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
