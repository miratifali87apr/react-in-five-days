import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(), // unique number based on time
      text: task.trim(), // remove extra spaces
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
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
      <h1>Welcome to Day 1!</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
