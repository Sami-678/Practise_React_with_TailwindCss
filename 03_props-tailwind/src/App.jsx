import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* heading  */}
      <h1 className='text-4xl bg-green-500 text-white p-8 rounded-full font-bold shadow-lg text-center mb-4'>
        Hello world
      </h1>
      {/* cards components  no 1 */}
      
      <Cards username={"D'souza"}   />
        {/* cards components  no 2 */}
        {/* as visit us is the defalut value of the btntext props if we want to change then we can make our own value  */}
      <Cards username={"Sara"}  btnText={"view our resume"}/>
        {/* cards components  no 3 */}
      <Cards username = {"John"} />
      
    </>
  )
}

export default App
