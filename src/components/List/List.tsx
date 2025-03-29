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

    const expBar = (experience: number) => {
        //keep total exp earned and derive level from total?
        function getLvl(exp: number) {
            let remainingExp = exp;
            let level = 0;
            while(remainingExp > level * 100) {
                level++;
                remainingExp -= level * 100;
                console.log(remainingExp, level)
            }
            return {level, exp: remainingExp}
        }
        const {level, exp} = getLvl(experience)
        return (
            <div>Curr level: {level}</div>
        )
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
        {expBar(1500)}
    </>
  )
}

export default List
