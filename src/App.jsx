import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AIImageGeneratorLanding from './components/AIImageGeneratorLanding.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AIImageGeneratorLanding />
    </div>
  )
}

export default App
