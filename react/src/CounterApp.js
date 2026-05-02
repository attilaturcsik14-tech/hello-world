import React, { useState } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter alkalmazás</h2>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default CounterApp;