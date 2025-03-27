import { useState } from 'react'
import './App.css'

import CreateTask from './components/CreateTask/CreateTask'
import StatChart from './components/RadarChart/RadarChart'
import List from './components/List/List'

function App() {

  return (
    <>
      <List />
      <StatChart />
      <CreateTask/>
    </>
  )
}

export default App
