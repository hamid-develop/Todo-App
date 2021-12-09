import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import Todo from "../Todo/Todo";
import { Badge } from "antd";
import "./TodoList.css";
import FlipMove from "react-flip-move";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todoList">
      {todos.length !== 0 ? (
        <h3>
          you have <Badge count={todos.length} overflowCount={3} /> item todo..
        </h3>
      ) : null}
      {/* <FlipMove duration={500} easing="ease-in-out"> */}
        {todos.length > 0 ? (
          todos.map((item) => <Todo key={item.id} todo={item} />)
        ) : (
          <h3>Todo list is empty..</h3>
        )}
      {/* </FlipMove> */}
    </div>
  );
};

export default TodoList;
