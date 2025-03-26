import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux tool</h1>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
