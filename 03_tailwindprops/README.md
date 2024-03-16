# How to use tailwind and props?

## Setting Up Tailwind with Vite in Super Small Steps (using npm):
[https://tailwindcss.com/docs/guides/vite]

**1. Create a Vite project:**

Open your terminal and run:

```bash
npm create vite@latest my-project
cd my-project
```

**2. Install Tailwind & dependencies:**

```bash
npm install -D tailwindcss postcss autoprefixer
```

**3. Generate Tailwind config:**

```bash
npx tailwindcss init -p
```

**4. Add the paths to all of your template files in your tailwind.config.js file.**
```tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**4. Add the Tailwind directives to your CSS**

```index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**5. Start development server:**

```bash
npm run dev
```

**6. Use Tailwind classes in your components!**

```jsx

import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container p-4 flex flex-wrap justify-center flex-col items-center">
      <h1 className="text-3xl font-bold">Hello, Tailwind!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 max-w-sm rounded">
        Click me
      </button>
    </div>
  );
}

export default App;
```

That's it! You're now ready to use Tailwind's utility classes in your Vite project with npm. Remember to rebuild your project when you make changes to `tailwind.config.js`.

**Bonus:**

- Explore Tailwind's documentation for customization and plugins: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Use a VS Code extension for code completion and syntax highlighting.

I hope this helps!


## React Props: Passing Data Between Components

Imagine Lego bricks. Each brick has specific properties, like color and shape, that contribute to building something bigger and more complex. In React, **props** are similar to Lego brick properties, allowing you to pass data from one component to another.

**Here's a small note with an example:**

**Component 1 (Parent):**

```jsx
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <Welcome message={props.message} />
    </div>
  );
}
```

**Component 2 (Child):**

```jsx
function Welcome(props) {
  return (
    <p>{props.message}</p>
  );
}
```

**Explanation:**

1. `Greeting` component (parent) takes a single prop named `name`.
2. `Welcome` component (child) takes a prop named `message`.
3. `Greeting` passes its `name` prop to `Welcome` as `{name: props.name}`.
4. `Welcome` renders the received `message` prop using `{props.message}`.

**Benefits of using props:**

* **Modular components:** Keeps components focused and reusable with specific data.
* **Dynamic content:** Allows components to adapt based on passed data.
* **Improved code organization:** Makes data flow clear and maintainable.

**Remember:**

* Props are read-only in child components.
* Props flow from parent to child, not the other way around.

This is just a basic example. Props can be used for various data types, including objects, arrays, and functions.

I hope this clarifies the concept of React props! Feel free to ask if you have further questions.