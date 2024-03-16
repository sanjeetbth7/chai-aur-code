# To-Do List
Here's a concise explanation of local storage in React with an example:

## Local Storage:
Local storage is a built-in API that web browsers provide for persisting data on the client-side. It allows you to store key-value pairs of data that survive page refreshes and browser closures.

- Stores data (key-value pairs) on the client-side (browser).
- Data persists between page refreshes.

Here are the key methods for working with local storage:

- **`setItem(key, value)`:** Stores a value under a specific key. The value must be a string, but you can store complex data by stringifying it with `JSON.stringify(data)`.
- **`getItem(key)`:** Retrieves the value associated with a given key. The returned value will be a string, so you might need to parse it with `JSON.parse(value)` if it was originally an object or array.
- **`removeItem(key)`:** Removes the key-value pair from local storage.
- **`clear()`:** Removes all data from local storage.

**Using in React:**

1. **Manual Approach:**

   - Call `localStorage.setItem(key, value)` to store data.
   - Call `localStorage.getItem(key)` to retrieve data.

2. **Custom Hook (`useLocalStorage`):**

   - Create a reusable hook to manage local storage access.

**Example (Custom Hook):**

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  // Parse stored json or return default value
  const getFromStorage = () => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return defaultValue;
    }
    return JSON.parse(storedValue);
  };

  const [value, setValue] = useState(getFromStorage);

  // useEffect for persistent state
  useEffect(() => {
    // Store new value to LocalStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;


export default useLocalStorage;
```

**Usage Example:**

```javascript
import useLocalStorage from './useLocalStorage'; // Assuming useLocalStorage is in a separate file

import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage'; // Assuming useLocalStorage is in a separate file

function App() {
  const [name, setName] = useLocalStorage('user-name', '');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Your name: {name}</p>
    </div>
  );
}

export default App;

```

This approach offers a clean and maintainable way to interact with local storage data in your React components.




