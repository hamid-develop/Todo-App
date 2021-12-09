import "./App.css";
import Header from "./Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./context/TodoContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </TodoContextProvider>
    </div>
  );
}

export default App;
