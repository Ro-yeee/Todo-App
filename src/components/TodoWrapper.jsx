import React ,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import TodoCard from './TodoCard'
import EditTodoForm from './EditTodoForm'
uuid()

function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo,priority) =>{
    setTodos([...todos, {id: uuid(),task: todo,completed: false,isEditing:false,priority}])
  }
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const deleteTask = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleEditing = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo))
  }
  const editTodo = (todo,priority,id) =>{
    setTodos(todos.map(element => element.id === id ? {...element, task:todo, isEditing: !element.isEditing,priority} : element))
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {
        todos.length < 1 ? <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> :
        todos.map((element,index) => {
          if(element.isEditing)
          return (<EditTodoForm editTodo={editTodo} element={element} key={index} />) 
          else 
          return (<TodoCard element={element} 
                            key={index} 
                            toggleComplete={toggleComplete} 
                            deleteTask={deleteTask} 
                            toggleEditing={toggleEditing} />)
          })
      }
    </div>
  )
}

export default TodoWrapper
