
import React from 'react';
import './index.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
    <div className='flex flex-col items-center justify-center text-2xl bg-slate-300 p-2'>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App