import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo] = useState("")
  const [priority,setPriority] = useState(null)
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      addTodo(todo,priority)
      setTodo("")
      setPriority(null)
    }} className='TodoForm'>
      <div className='radioBtnsContainer'>
        <input checked={priority === "Low"} onChange={() => setPriority("Low")} type="radio" name="priority" className='radio0' required></input>
        <input checked={priority === "Medium"} onChange={() => setPriority("Medium")} type="radio" name="priority" className='radio1' required></input>
        <input checked={priority === "High"} onChange={() => setPriority("High")} type="radio" name="priority" className='radio2' required></input>
      </div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the task today?' required/>
      <button className='submit-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
