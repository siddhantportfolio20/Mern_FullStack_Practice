import { memo, useState,useCallback } from "react";


const Child = memo(

    function Child({ onGreet }) {
        console.log("CHILD RENDERED");
        return (
            <button onClick={onGreet}>
                Greet
            </button>
        );
    }
);

function UseCallbacks() {

    const [name, setName] = useState("");
    const [a, setA] = useState(0);

    const greet = useCallback(() => {
    
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
            <Child onGreet={greet} />
        </div>
    );
}

export default UseCallbacks;