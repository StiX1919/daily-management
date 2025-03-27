import { useState } from "react"

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
        //add types
        return (
            <div>
                {/* add associated attribute as color or faded so you know which one it's connected to*/}
                <p>{name}</p>
                <p>{lvl}</p>
                <p>{progress}</p>
                {/* add exp bar design with percentage filled */}
            </div>
        )
    }

    //level math for exp needed to level up further
    // 1st idea: (currLvl + 1) * 100

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
