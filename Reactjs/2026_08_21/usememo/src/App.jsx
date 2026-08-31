import {memo, useCallback, useState } from "react";

const Child = memo(function Child({ onGreet }) {
    console.log("CHILD RENDERED");
    return (
        <button onClick={onGreet}>
            Greet
        </button>
    );
})

function App() {
    const [name, setName] = useState("");
    const [a, setA] = useState(0);

    const greet =useCallback( () => {
        console.log("Hello", name);
    },[]);
    console.log("PARENT RENDERED");
    
    
    return (
        <div>
            <h1>Hello {name}</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
            />
    
            <button onClick={()=>{setA(prev => prev +1)}}>increase</button>
            {a}

            <Child onGreet={greet} />
        </div>
    );
}

export default App;