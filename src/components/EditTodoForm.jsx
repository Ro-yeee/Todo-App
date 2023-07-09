import React from 'react'
import { useState } from 'react'

function EditTodoForm({editTodo,element}) {
  const [todo,setTodo] = useState(element.task)
  const [prio,setPriority] = useState(element.priority)

  return (
    <form onSubmit={(e) =>{
      e.preventDefault()
      editTodo(todo,prio,element.id)
      setTodo("")
      setPriority({status:false,val:null})
    }} className='TodoForm EditTodoForm'>
      <div className='radioBtnsContainer'>
        <input checked = {prio === '0'} onChange={(e) => setPriority("0")} type="radio" name="priority" className='radio0' required></input>
        <input checked = {prio === "1"} onChange={(e) => setPriority("1")} type="radio" name="priority" className='radio1' required></input>
        <input checked = {prio === "2"} onChange={(e) => setPriority("2")} type="radio" name="priority" className='radio2' required></input>
      </div>
      <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='todo-input' type="text" placeholder='What is the updated task?' required/>
      <button className='submit-btn' type='submit'>Update</button>
    </form>
  )
}


export default EditTodoForm
