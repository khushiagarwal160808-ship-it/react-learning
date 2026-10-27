import { useState } from 'react';

function State() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter App</h1>

            <h2>Count: {count}</h2>

            <button onClick={decrement}>Decrease</button>

            <button onClick={increment}>Increase</button>
        </div>
    );
}

export default State;
/**
 * state is a built-in React hook that allows you to add state management to functional components.
 * It enables you to store and update values that can change over time, such as user input, counters, or any other dynamic data. 
 * The useState hook returns an array with two elements: the current state value and a function to update that value. 
 * When the state is updated, React re-renders the component to reflect the new state.
 * Why never assign to state directly?
count = count + 1 does not tell React anything, so it never re-renders (and count is const anyway). Always call the setter, 
e.g. setCount(count + 1).
 */

/**
 * A "hook" is just a special function React provides, and they all start with use.
 * State vs props:
 * Props come from the outside (a parent) and are read-only. State is owned inside the component and is meant to change. 
 * Props are data handed to you; state is data you keep and update.
 */