import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5

  // const addValue = () => {
  //   setCounter(counter + 1)
  //   console.log("value added")
  // }

  function addValue() {
    if (counter < 20) {
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)  // it does work beause react works in batch and sends the setcounter value as starting one bcz it assumes all the setCOunter are same.

      setCounter(prevCounter => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      console.log("value added")
    }
  }
  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("value removed")
    }
  }

  return (
    <>
      <h1>this is counter project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
