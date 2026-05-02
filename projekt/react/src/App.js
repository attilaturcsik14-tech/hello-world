import React, { useState } from "react";
import CounterApp from "./CounterApp";
import TodoApp from "./TodoApp";

function App() {
    const [page, setPage] = useState("counter");

    return (
        <div style={{ textAlign: "center" }}>
            <h1>SPA Menü</h1>

            <button onClick={() => setPage("counter")}>Counter</button>
            <button onClick={() => setPage("todo")}>Todo</button>

            <hr />

            {page === "counter" && <CounterApp />}
            {page === "todo" && <TodoApp />}
        </div>
    );
}

export default App;