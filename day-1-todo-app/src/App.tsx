import { useState } from "react";
import AddTodo from "./components/AddTodo.tsx";
import DisplayTodos from "./components/DisplayTodos.tsx";


type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id: number) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
      <div style={{ padding: "2rem" }}>
        <h1>React Todo App – Day 1 (Modular Design)</h1>
        <AddTodo onAdd={addTodo} />
        <DisplayTodos todos={todos} onToggle={toggleDone} onDelete={deleteTodo} />
      </div>
  );
};

export default App;
