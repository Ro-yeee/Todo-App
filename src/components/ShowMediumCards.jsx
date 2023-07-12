import React from 'react'

function ShowMediumCards({todos,toggleComplete}) {
    if(todos.filter(todo => todo.priority === "Medium").length < 1 && todos.length > 0 ) return <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> 
    else
        return (
            todos.filter(todo => todo.priority === "Medium").map((element,index) => (
                <div className={element.completed ? "finished card" : "card"} id={element.priority === "Low" ? "one" : element.priority === "Medium" ? "two" : "three"} >
                    <input checked={element.completed} onChange={() => toggleComplete(element.id)} className='check' type='checkbox'></input>
                    <h1 className={element.completed ? "completed" : null}>{element.task}</h1>
                </div>
            ))
  )
}

export default ShowMediumCards
