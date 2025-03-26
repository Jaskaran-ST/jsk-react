import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-" style={{ backgroundColor: color }}>This is div1
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">This is div2
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">This is div3
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }}>Red
          </button>
          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'green' }}>Green
          </button>
          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'blue' }}>Blue
          </button>
          <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'olive' }}>olive
          </button>
          <button onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'grey' }}>grey
          </button>
          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'yellow', color: "black" }}>yellow
          </button>
          <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'pink', color: "black" }}>pink
          </button>
          <button onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'purple' }}>purple
          </button>
          <button onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'lavender', color: "black" }}>lavender
          </button>
          <button onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'white', color: "black" }}>white
          </button>
          <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'black' }}>Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
