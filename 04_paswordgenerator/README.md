# useEffect, useRef and useCallback

**useEffect**

- **Purpose:** Executes side effects in functional components, including:
    - Fetching data
    - Setting up subscriptions
    - Manually triggering re-renders (use with caution)
- **Key Points:**
    - Runs after every render by default.
    - Optional dependency array to control execution based on state/prop changes.
    - Cleanup function can be returned to perform actions before unmounting.
- **Example:**

```javascript
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Run only on initial render

  return (
    <div>
      Count: {count}
    </div>
  );
}
```

**useRef**

- **Purpose:** Creates a mutable ref object that persists across renders, holding a value that doesn't trigger re-renders.
- **Key Points:**
    - Not directly for state management, but useful for holding DOM references or values not managed by state.
    - Access its value using `.current`.
- **Example:**

```javascript
import React, { useRef } from 'react';

function Example() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access DOM element later
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**useCallback**

- **Purpose:** Memoizes a callback function, returning the same instance if its dependencies haven't changed.
- **Key Points:**
    - Prevents unnecessary re-renders of child components if a callback is passed as a prop and dependencies haven't changed.
    - Improves performance and reduces memory allocations.
- **Example:**

```javascript
import React, { useCallback, useRef } from 'react';

function Example() {
  const count = useRef(0); // Use useRef for persistent values

  const expensiveCalculation = useCallback(() => {
    // Simulate expensive calculation
    for (let i = 0; i < 10000000; i++) {
      count.current++;
    }
    return count.current;
  }, [count]); // Recalculate only when count changes

  return (
    <ChildComponent calculate={expensiveCalculation} />
  );
}

function ChildComponent({ calculate }) {
  const result = calculate(); // Use memoed callback

  return (
    <div>
      Expensive calculation result: {result}
    </div>
  );
}
```

Remember to choose the appropriate hook based on your specific use case for optimal performance and maintainability in your React applications.