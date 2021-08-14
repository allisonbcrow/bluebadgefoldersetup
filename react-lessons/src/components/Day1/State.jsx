// State is information that the compnent stores and keeps track of. State changes over time.
// State can be primitive (booleans, numbers, strings) or it can be complex data types (arrays, objects, functions)
import {useState} from "react";

const State = () => {
    //const [stateVariable, setStateVariable] = useState(<initial state value>)
    const [button, setButton] = useState("Hi There");
    console.log(button);
    console.log(setButton);
    return (
        <div>
            <button onClick={(e) => setButton("Oh, hi Mark!")}>Click Me!</button>
            <span>{button}</span>
            <h1>Hello, Allison!</h1>
        </div>
    );
};

export default State;