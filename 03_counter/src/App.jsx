import { useState } from 'react'
import './App.css'

function App() {

  // UI updation is controled by react using hooks
  let [count, setCount] = useState(0)

  const addCount = ()=>{
    setCount(()=>{
      if(count<20) return count+1;
      return count  // Restricting count on max 20
    })
  }

  const removeCount = ()=>{
    setCount(()=>{
      if(count>0) return count-1;
      return count  // Restricting count on min 0
    })
  }

  return (
    <>
      <div>
      <h2>This Count is restricted over the range [0,20]</h2>
      </div>
      <h1>Counter : {count}</h1>
      <div className="card">
        <button onClick={addCount}>
        addCount : {count}
        </button>
      </div>
      <div className="card">
        <button onClick={removeCount}>
          removeCount : {count}
        </button>
      </div>
    </>
  )
}

export default App
