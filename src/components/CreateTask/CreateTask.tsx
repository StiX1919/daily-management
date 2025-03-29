import { useState } from 'react'
import './CreateTask.scss'
import useForm from '../../hooks/useForm'
import RadioButton from '../RadioButton/RadioButton';

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
  //rename to Abilities
  const skills = [
    'cooking',
    'drawing',
    'coding',
    'adventure'
  ];
  const difficulties = [
    'Easy',
    'Moderate',
    'Difficult',
    'Punishing'
  ]
  //add base xp value and multiplier value for each difficulty 
  const { formValues, handleUpdate, handleSubmit } = useForm({
    taskName: '',
    taskFrequency: '',
    taskDifficulty: '',
    taskStat: '',
    taskSkill: '',
    taskDirection: ''
  })

  return (
    <>
        <form className='create-card' onSubmit={handleSubmit}>
            <div className='difficulties-container'>
                {difficulties.map((e,i) => <RadioButton name={'taskDifficulty'} value={e} onChange={handleUpdate}/>)}
            </div>
            <input className='task-name' type='text' name='taskName' value={formValues.taskName} onChange={handleUpdate}/>
            <select className='task-frequency' name='taskFrequency' value={formValues.taskFrequency} onChange={handleUpdate}>
                {frequencies.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select> 
            {/* <input className='task-difficulty' type='radio' value={formValues.taskdifficulty} onChange={handleUpdate}/> */}
            <select className='task-stat' name="taskStat" value={formValues.taskstat} onChange={handleUpdate}>
                {stats.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select>
            <select className='task-skill' name='taskSkill' value={formValues.taskskill} onChange={handleUpdate}>
                {skills.map((e,i) => <option key={i} value={e}>{e}</option>)}
            </select>
                {/* add collapsable input to add new skill to work on */}
            <input className='task-direction' name='taskDirection' type='checkbox' value={formValues.taskdirection} onChange={handleUpdate}/>
        </form>
        <div>
            <p>{formValues.taskName}</p>
            <p>{formValues.taskFrequency}</p>
            <p>{formValues.taskDifficulty}</p>
            <p>{formValues.taskStat}</p>
            <p>{formValues.taskSkill}</p>
            <p>{formValues.taskDirection}</p>
        </div>
    </>
  )
}

export default CreateTask
