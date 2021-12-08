import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <AddTodo />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
