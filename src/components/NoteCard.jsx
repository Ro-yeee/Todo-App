import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function NoteCard({element,deleteNote}) {
  return (
    <div className='noteCard'>
        <h2>{element.note}</h2>
        <FontAwesomeIcon onClick={() => deleteNote(element.id)} icon={faXmark} className='note-remove-icon'/>
    </div>
  )
}

export default NoteCard
