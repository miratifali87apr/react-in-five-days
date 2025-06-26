import TodoItem from "./TodoItem";

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type Props = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

const DisplayTodos = ({ todos, onToggle, onDelete }: Props) => (
    <ul>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        ))}
    </ul>
);

export default DisplayTodos;
