import React from 'react'

function NoteCard({element}) {
  return (
    <div className='noteCard'>
        <h2>{element.note}</h2>
    </div>
  )
}

export default NoteCard
