import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  //here counter is the variable and setcounter is the function.
  //We are using the hooks here and useState in one of many hooks in React.
  //5 is the initial value we are assigning to the useState hook , it could be anything even 0.

  // let counter = 15

  const addValue = () => {
    //console.log('Clicked', counter);
    //counter = counter + 1;
    if(counter < 10){ 
           setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer> Counter can count only between 0 to 10.</footer>
    </>
  )
}

export default App
