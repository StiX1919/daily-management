import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CreateTask from './components/CreateTask/CreateTask'
import StatChart from './components/RadarChart/RadarChart'
import List from './components/List/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
      <StatChart />
      <CreateTask/>
      {/* create quests or challanges for bonus skill points.
      share quests
      game system using skills?
      */}
    </>
  )
}

export default App
