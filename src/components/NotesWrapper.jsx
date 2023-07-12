import React, { useState } from 'react'
import NoteForm from './NoteForm'
import { v4 as uuid } from 'uuid'
import NoteCard from './NoteCard'

function NotesWrapper() {
  const [notes,setNotes] = useState([])
  const addNote = (note) => {
    setNotes([...notes,{id:uuid(),note}])
  }
  const deleteNote = (id) =>{
    setNotes(notes.filter(note => note.id !== id))
  }
  return (
    <div className='NotesWrapper'>
      <NoteForm addNote={addNote} />
      {notes.length < 1 ? <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> : ""}
      <div className='noteContainer'>
        {
          notes.map((element,index)=>
          <NoteCard element={element} key={index} deleteNote={deleteNote}/>
          )
        }
      </div>
     </div>
  )
}

export default NotesWrapper
