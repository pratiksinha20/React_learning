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
    style={{backgroundColor: colors[count % colors.length]}}>
      <button className='count'>
        
        count is {count}
        </button>
        <br />
        <button
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
