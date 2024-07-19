import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  // const addValue = ()=>{
  //   console.log("clicked",counter);
  //   counter += 1;
  // }
  let  [counter, anyVariablelikesetCounter] = useState(15);
  const addValue = () => {

    anyVariablelikesetCounter(counter+1);
    console.log("clicked", anyVariablelikesetCounter);
  }
  const removeValue = () =>{
    anyVariablelikesetCounter(counter-1);
    console.log("removed");
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick = {addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
