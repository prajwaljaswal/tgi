import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add } from './calculator'


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setResult(err.message); // Handle errors like negative numbers
    }
  };

  return (
  <div style={{ padding: '20px' }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter comma-separated numbers"
        style={{ border: "solid 1px black", padding: '5px', width: '250px' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>
      {result !== null && (
        <p style={{ marginTop: '10px' }}>Result: {result}</p>
      )}
    </div>
  )
}

export default App
