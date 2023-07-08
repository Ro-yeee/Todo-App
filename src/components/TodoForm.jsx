import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo] = useState("")
  const [priority,setPriority] = useState({status:false,val:null})
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      addTodo(todo,priority.val)
      setTodo("")
      setPriority({status:false,val:null})
    }} className='TodoForm'>
      <div className='radioBtnsContainer'>
        <input checked={priority.status} onChange={(e) => setPriority({status:e.checked,val:"0"})} type="radio" name="priority" className='radio0' required></input>
        <input checked={priority.status} onChange={(e) => setPriority({status:e.checked,val:"1"})} type="radio" name="priority" className='radio1' required></input>
        <input checked={priority.status} onChange={(e) => setPriority({status:e.checked,val:"2"})} type="radio" name="priority" className='radio2' required></input>
      </div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the task today?' required/>
      <button className='submit-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
