type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type Props = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: Props) => (
    <li>
        <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
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
            onClick={() => onDelete(todo.id)}
            style={{ marginLeft: "10px", color: "red" }}
        >
            ❌
        </button>
    </li>
);

export default TodoItem;
