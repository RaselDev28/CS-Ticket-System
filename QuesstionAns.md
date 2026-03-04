1. What is JSX, and why is it used?
    Ans: JSX (JavaScript XML) is a syntax extension used in React that allows to write like HTML code inside JavaScript.

    **JSX used because easier UI creation, combine JavaScript and HTML and also improved code readability.

2. What is the difference between State and Props?
    Ans: *Props:
            1. Passed from parent component to child component.
            2. Read only
            3. Used to send data between component.
            4. Props are immutable and passed from outside.
        
         *State:
            1. Manage inside the component.
            2. Can be changed or updated using setState.
            3. Used to control dynamic behavior.
            4. State is mutable and manage within the component itself.


3. What is the useState hook, and how does it work?
    Ans: useState is a function that lets we added state inside a functional component. It works in two step these are:
               
            1.	The current state value. 
            2.	A function to update that state like setCunt.
    
4. How can you share state between components in React?
    Ans: In React, state can be shared between components in several common ways:

        1. Lifting State Up
        2. Using context API
        3. Using stage-management libraries.

5. How is event handling done in React?
    Ans:  Event handling in React is done by attaching event handlers (functions) to elements using camelCase event names like        onClick, onChange, etc., and React manages them using its synthetic event system.
