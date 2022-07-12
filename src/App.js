import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]= useState(0)
  return (
    <div className="App">
      <h2>Count is {counter}</h2>
      <button className='increment_count' onClick={()=> setCounter((prev)=> prev+1)}>
        
         Increment
      </button>
      <button className='decrement_count' onClick={()=> setCounter((prev)=> prev-1)}>
        
         Deccrement
      </button>
    </div>
  );
}

export default App;
