import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";

const Todo = ( {todo} ) => {
  const {deleteTodoHandler, completedTodoHandler} = useContext(TodoContext)
  return <div id={todo.id}>
    {todo.title}
    <button onClick={() => completedTodoHandler(todo.id)}>done</button>
    <button onClick={() => deleteTodoHandler(todo.id)}>delete</button>
    </div>;
};

export default Todo;
