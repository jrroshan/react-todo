import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import ToastNotification from "./components/ToastNotification";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App w-4/5 mx-auto text-center">
      <ToastNotification></ToastNotification>
      <h1 className="my-5">React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
}

export default App;
