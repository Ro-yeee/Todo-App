import React from 'react'

function ShowCard({element}) {
  return (
    <div className="card" id={element.priority === "0" ? "one" : element.priority === "1" ? "two" : "three"} >
        <input checked={element.completed} className='check' type='checkbox' style={{cursor:'default'}}></input>
        <h1>{element.task}</h1>
    </div>
  )
}

export default ShowCard
