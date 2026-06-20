import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //let counter=5;
  let [counter,setcounter]=useState(15);
  const addvalue=()=>{
   // console.log("clicked",counter);
    counter=counter+1;
    setcounter(counter);

  }
  const deletevalue=()=>{
   // console.log("delete value",counter);
    counter=counter-1;
    setcounter(counter);
  }
  return (
   <>
   <h1>chai aur code</h1>
   <h1>counter value:{counter}</h1>
   <button onClick={addvalue}>Add value:{counter}</button><br />
   <button onClick={deletevalue}>remove value:{counter}</button>
   <p>footer:{counter}</p>
   </>
  )
}

export default App
