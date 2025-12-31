import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const colors=["white",
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "gray",
    "brown",
    "black"];
  return (
    <>
    <div className="App"
      style={{
        backgroundColor: colors[count],
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        transition: "background-color 0.3s ease"
      }}
      >
      <button className='count'>
        
        count is {count}
        </button>
         <input
        type="range"
        min="0"
        max="10"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
<button
// disabled={count===0}
  className="plus"
  onClick={() =>
    setCount(prev => {
      if (prev < 10) {
        return prev + 1;
      }
      return prev;
    })
  }
>
  +
</button>

<button
// disabled={count=== colors.length-1}
  className="minus"
  onClick={() =>
    setCount(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    })
  }
>
  -
</button>


    </div>
    </>
  )
}

export default App
