import { Chart } from "chart.js"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts"

function StatChart() {
    const data = [
        { name: 'Strength', x: 10 },
        { name: 'Dexterity', x: 10 },
        { name: 'Constitution', x: 10 },
        { name: 'Intelligence', x: 10 },
        { name: 'Wisdom', x: 10 },
        { name: 'Charisma', x: 10 },
    ]
    //x should be increased as level approaches/passes initial threshold
    //x = highest ability level rounded up to the nearest 10.
    //make scaleable to check lower ability scores

  return (
    <>
        <RadarChart height={500} width={500} outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey='x' stroke="blue" fill="blue" fillOpacity={.5} />
        </RadarChart>
    </>
  )
}

export default StatChart
