import React from 'react'

function Todo({todos}) {
  return (
    <div>
      {
        todos.map((element) => (
          <h3>{element.task}</h3>
        ))
      }
    </div>
  )
}

export default Todo
