import React from 'react'

function ShowHighCards({todos,toggleComplete}) {
    if(todos.filter(todo => todo.priority === "2").length < 1 && todos.length > 0 ) return <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> 
    else
        return (
            todos.filter(todo => todo.priority === "2").map((element,index) => (
                <div className={element.completed ? "finished card" : "card"} id={element.priority === "0" ? "one" : element.priority === "1" ? "two" : "three"} >
                    <input checked={element.completed} onChange={() => toggleComplete(element.id)} className='check' type='checkbox'></input>
                    <h1 className={element.completed ? "completed" : null}>{element.task}</h1>
                </div>
            ))
  )
}

export default ShowHighCards
