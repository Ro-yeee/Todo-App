import React from 'react'

function TodoNavElement({selection,setSetection}) {
  return (
    <div className='navContainer'>
      <h2 className='sectionHeading'>{selection}</h2>
      <div className='navBtnContainer'>
        <button onClick={() => setSetection("All Tasks")} className={selection === "All Tasks" ? 'activee navBtn' : 'navBtn'} >All</button>
        <button onClick={() => setSetection("Completed")} className={selection === "Completed" ? 'activee navBtn' : 'navBtn'} >Completed</button>
      </div>
    </div>
  )
}

export default TodoNavElement
