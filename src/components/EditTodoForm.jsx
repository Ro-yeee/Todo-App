import React from 'react'
import { useState } from 'react'

function EditTodoForm({editTodo,element}) {
  const [todo,setTodo] = useState(element.task)
  const [prio,setPriority] = useState(element.priority)

  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      editTodo(todo,prio,element.id)
    }} className='TodoForm EditTodoForm'>
      <div className='radioBtnsContainer'>
        <input checked = {prio === 'Low'} onChange={() => setPriority("Low")} type="radio" name="priority" className='radio0' required></input>
        <input checked = {prio === "Medium"} onChange={() => setPriority("Medium")} type="radio" name="priority" className='radio1' required></input>
        <input checked = {prio === "High"} onChange={() => setPriority("High")} type="radio" name="priority" className='radio2' required></input>
      </div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the updated task?' required/>
      <button className='submit-btn' type='submit'>Update</button>
    </form>
  )
}


export default EditTodoForm
