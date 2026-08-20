import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [clr, setClr] = useState("purple")

  return (
    <>
        <div className='w-full h-screen' style={{backgroundColor : clr}}></div>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setClr("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}> Red</button>
            <button onClick={() => setClr("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}> Green</button>
            <button onClick={() => setClr("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}> Blue</button>
            <button onClick={() => setClr("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "black"}}> Black</button>
            <button onClick={() => setClr("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "Yellow"}}> Yellow</button>
            <button onClick={() => setClr("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "white"}}> White</button>
            <button onClick={() => setClr("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "lavender"}}> Lavender</button>
            <button onClick={() => setClr("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "pink"}}> Pink</button>
          </div>
        </div>
    </>
  )
}

export default App
