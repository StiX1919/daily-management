import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CreateTask from './components/CreateTask/CreateTask'
import StatChart from './components/RadarChart/RadarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StatChart />
      <CreateTask/>
    </>
  )
}

export default App
