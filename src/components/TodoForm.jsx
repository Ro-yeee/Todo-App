import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo] = useState("")
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      addTodo(todo)
      setTodo("")
    }} className='TodoForm'>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the task today?' required/>
      <button className='submit-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
