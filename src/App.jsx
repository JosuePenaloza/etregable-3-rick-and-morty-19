import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Locations from './components/Locations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>App</h3>
      <Locations />
    </div>
  )
}

export default App
