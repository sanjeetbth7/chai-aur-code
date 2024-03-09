# Currecy converter
```
// Currrecy rate api
    let url = `https://open.er-api.com/v6/latest/${currency}`
```
This mini web app facilitates currency conversion based on current exchange rates, allowing users to quickly and accurately convert between different currencies in real-time.


## useEffect Hook
   - `useEffect` is a React Hook that allows you to perform side effects in function components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM.
   - It runs after every render by default, but you can control when it runs by providing dependencies. If the dependencies change between renders, the effect will re-run.

   ```javascript
   import React, { useState, useEffect } from 'react';

   function ExampleComponent() {
       const [count, setCount] = useState(0);

       useEffect(() => {
           document.title = `You clicked ${count} times`;
       }, [count]); // Only re-runs if `count` changes

       return (
           <div>
               <p>You clicked {count} times</p>
               <button onClick={() => setCount(count + 1)}>
                   Click me
               </button>
           </div>
       );
   }
   ```

## useId Hook
   - `useId` is a custom hook used to generate a unique identifier within a React component. It's useful for associating labels with inputs to improve accessibility, ensuring that each input has a unique ID.
   - It internally uses the `useRef` hook to generate a unique ID each time the component renders.

   ```javascript
   import React from 'react';
   import { useId } from 'react';

   function InputComponent() {
       const inputId = useId(); // Generates a unique ID

       return (
           <div>
               <label htmlFor={inputId}>Input:</label>
               <input id={inputId} type="text" />
           </div>
       );
   }
   ```

In the example, `useEffect` updates the document title based on the `count` state, and `useId` generates a unique ID for an input element, enhancing accessibility by associating the label with the input.