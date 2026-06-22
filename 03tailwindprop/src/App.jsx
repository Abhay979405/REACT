import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  let myobj={
    username:"abhay",
    age:21
  }
  let newArr=[1,2,3];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-600">Chai aur Code</h1>

      {/* Card */}
      <Card username="chai aur code" btntext="click me"/>
      <Card username="abhay dubey" btntext="visit me"/>
    </div>
  );
}

export default App;

