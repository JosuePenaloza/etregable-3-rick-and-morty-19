import { useState } from 'react'
import './App.css'
import Locations from './components/Locations'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo/>
      <Locations />
    </div>
  )
}

export default App
