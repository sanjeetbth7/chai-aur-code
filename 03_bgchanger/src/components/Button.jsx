import React from 'react';

export default function Button({ name, setColor }) {
  return (
    <button
      type="button"
      style={{backgroundColor:name}}
      className={`rounded-md px-3 py-2 text-sm font-semibold text-green-500 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black m-2`}
      onClick={() => setColor(name)}
    >
      {name}
    </button>
  );
}