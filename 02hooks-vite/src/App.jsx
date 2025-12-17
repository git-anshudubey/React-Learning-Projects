import { useState } from 'react'            //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 5;

 let [counter, setCounter]  = useState(5)

  const addValue = () => {
    // console.log("Add Clicked", counter +1)
    // counter = counter + 1
     if(counter < 10){
      setCounter(counter + 1)
     } 

  }

  const removeValue = () => {
    if(counter > 0){
       setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter Value : {counter} </h2>
      <button id='add-btn' onClick={addValue}>Add</button>
      <button id = 'remove-btn' onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
