import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo] = useState("")
  const [priority,setPriority] = useState(0)
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      addTodo(todo,priority)
      setTodo("")
    }} className='TodoForm'>
      <div className='radioBtnsContainer'>
        <input onChange={() => setPriority(0)} type="radio" name="priority" id="low" className='radio' required></input>
        <input onChange={() => setPriority(1)} type="radio" name="priority" id="medium" className='radio' required></input>
        <input onChange={() => setPriority(2)} type="radio" name="priority" id="high" className='radio' required></input>
      </div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the task today?' required/>
      <button className='submit-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
