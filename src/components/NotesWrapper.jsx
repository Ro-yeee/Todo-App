import React, { useState } from 'react'
import NoteForm from './NoteForm'
import { v4 as uuid } from 'uuid'
import NoteCard from './NoteCard'

function NotesWrapper() {
  const [notes,setNotes] = useState([])
  const addNote = (note) => {
    setNotes([...notes,{id:uuid(),note}])
  }
  return (
    <div className='NotesWrapper'>
      <NoteForm addNote={addNote} />
      <div className='noteContainer'>
        {
          notes.map((element,index)=>
          <NoteCard element={element} key={index} />)
        }
      </div>
     </div>
  )
}

export default NotesWrapper
