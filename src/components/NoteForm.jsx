import React, { useState } from 'react'

export default function NoteForm({addNote}) {
    const [note,setNote] = useState("")
  return (
      <form onSubmit={(e) =>{
      e.preventDefault()
      addNote(note)
      setNote("")
    }} className='NoteForm'>
      <input value={note} onChange={(e) => setNote(e.target.value)} className='note-input' type="text" placeholder='Write your notes..' required/>
      <button className='note-submit-btn' type='submit'>Add Note</button>
    </form>
  )
}
