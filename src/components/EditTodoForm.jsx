import React from 'react'
import { useState } from 'react'

function EditTodoForm({editTodo,element}) {
  const [todo,setTodo] = useState(element.task)
  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      editTodo(todo,element.id)
      setTodo("")
    }} className='TodoForm'>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the updated task?' required/>
      <button className='submit-btn' type='submit'>Update Task</button>
    </form>
  )
}


export default EditTodoForm
