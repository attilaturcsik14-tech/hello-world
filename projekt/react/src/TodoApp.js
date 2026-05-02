import React, { useState } from "react";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    return (
        <div>
            <h2>Todo</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={() => {
                setTasks([...tasks, input]);
                setInput("");
            }}>
                Add
            </button>

            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>
                        {t}
                        <button onClick={() =>
                            setTasks(tasks.filter((_, index) => index !== i))
                        }>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;