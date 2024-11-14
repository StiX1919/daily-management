import { useState } from 'react'
import './CreateTask.css'
import useForm from '../../hooks/useForm'

function CreateTask() {
  const [count, setCount] = useState(0)
  const frequencies = [
    'repeat',
    'daily',
    'weekly',
    'monthly'
  ];
  const stats = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
  ];
  const skills = [
    'cooking',
    'drawing',
    'coding',
    'adventure'
  ];
  const { formValues, handleUpdate, handleSubmit } = useForm({
    taskName: '',
    taskFrequency: '',
    taskDifficulty: '',
    taskStat: '',
    taskSkill: '',
    taskDirection: ''
  })

  return (
        <form className='create-card' onSubmit={handleSubmit}>
            <input className='task-name' type='name' value={formValues.taskName} onChange={handleUpdate}/>
            <select className='task-frequency' value={formValues.taskFrequency} onChange={handleUpdate}>
                {frequencies.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select> 
            <input className='task-difficulty' type='radio' value={formValues.taskdifficulty} onChange={handleUpdate}/>
            <select className='task-stat' value={formValues.taskstat} onChange={handleUpdate}>
                {stats.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select>
            <select className='task-skill' value={formValues.taskskill} onChange={handleUpdate}>
                {skills.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select>
                {/* add collapsable input to add new skill to work on */}
            <input className='task-direction' type='checkbox' value={formValues.taskdirection} onChange={handleUpdate}/>
        </form>
  )
}

export default CreateTask
