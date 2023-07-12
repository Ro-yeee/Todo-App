import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function TodoCard({element,toggleComplete,deleteTask,toggleEditing}) {
  return (
    <div className={element.completed ? "finished card" : "card"} id={element.priority === "Low" ? "one" : element.priority === "Medium" ? "two" : "three"} >
      <input checked={element.completed} onChange={() => toggleComplete(element.id)} className='check' type='checkbox'></input>
      <h1 className={element.completed ? "completed" : null}>{element.task}</h1>
      <FontAwesomeIcon onClick={() =>toggleEditing(element.id)} icon={faPenToSquare} size={"2xl"} className='icon' />
      <FontAwesomeIcon onClick={() => deleteTask(element.id)} icon={faTrash} size={"2xl"} className='icon' />
    </div>
  )
}

export default TodoCard
