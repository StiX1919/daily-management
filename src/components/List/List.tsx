import { Chart } from "chart.js"
import { useState } from "react"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts"

function List() {
    const [skills, setSkills] = useState([]);
    const [input, setInput] = useState('');

    const addToSkills = () => {
        setSkills([...skills, input])
    }

  return (
    <>
        <div>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addToSkills}/>
        </div>

        {skills.map(skill => <p>{skill}</p>)}
    </>
  )
}

export default List
