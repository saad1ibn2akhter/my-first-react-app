import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  // const [count, setCount] = useState(0)

  

  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked');
  }
  const addFive = (num) =>
  {
    alert(num+ 5);
  }

  return (
    <>
    <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <h1>React Core Concept - 2</h1>
      <button onClick={handleClick} >Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() =>{alert('button 3 pressed')}}>Button 3</button>
      <button onClick={() => {addFive(10)}}>Button 4</button>
     
    </>
  )
}

export default App
