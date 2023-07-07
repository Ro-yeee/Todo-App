import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function TodoCard({element}) {
  return (
    <div className='card'>
      <input className='check' type='checkbox'></input>
      <h1>{element.task}</h1>
      <FontAwesomeIcon icon={faTrash} size={"2xl"} className='icon' />
      <FontAwesomeIcon icon={faPenToSquare} size={"2xl"} className='icon' />
    </div>
  )
}

export default TodoCard
