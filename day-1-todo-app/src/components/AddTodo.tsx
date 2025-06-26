import { useState } from "react";

type Props = {
    onAdd: (text: string) => void;
};

const AddTodo = ({ onAdd }: Props) => {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if (task.trim() === "") return;
        onAdd(task.trim());
        setTask("");
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder="Enter a task"
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;
