import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = { name: "card 1" }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Tailwind test</h1>
      <Card id="1" text="text1" />
      <Card id="2" text="text2" />
    </>
  )
}

export default App
