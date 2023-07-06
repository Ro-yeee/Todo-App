import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo] = useState("")
  return (
    <form className='TodoForm' onSubmit={(e) =>{
      e.preventDefault()
      addTodo(todo)
      setTodo("")
    }}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} className='todo-input' type="text" placeholder='What is the task today?' />
      <button className='submit-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
