import React from 'react'

function ShowCompletedCards({todos}) {
    if(todos.filter(todo => todo.completed === true).length < 1 && todos.length > 0 ) return <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> 
    else
        return (
            todos.filter(todo => todo.completed === true).map((element,index) => (
                <div className="card" id={element.priority === "0" ? "one" : element.priority === "1" ? "two" : "three"} >
                    <input checked={element.completed} className='check' type='checkbox' style={{cursor:'default'}}></input>
                    <h1>{element.task}</h1>
                </div>
            ))
  )
}

export default ShowCompletedCards
