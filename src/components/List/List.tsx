import { Chart } from "chart.js"
import { useState } from "react"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts"

function List() {
    const [skills, setSkills] = useState([]);
    const [input, setInput] = useState('');

    const addToSkills = () => {
        const skillObj = {
            name: input,
            lvl: 0,
            progress: 0
        }
        setSkills([...skills, skillObj])
    }

    const skillTag = ({name, lvl, progress}) => {
    
        return (
            <div>
                <p>{name}</p>
                <p>{lvl}</p>
                <p>{progress}</p>
            </div>
        )
    }

  return (
    <>
        <div>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addToSkills}/>
        </div>

        {skills.map(skill => skillTag(skill))}
    </>
  )
}

export default List
