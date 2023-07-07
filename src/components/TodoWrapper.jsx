import React ,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import TodoCard from './TodoCard'
uuid()

function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuid(),task: todo,completed: false,isEditing:false}])
  }
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const deleteTask = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  console.log(todos)
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {
        todos.map((element,index) => (
          <TodoCard element={element} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
        ))
      }
    </div>
  )
}

export default TodoWrapper
